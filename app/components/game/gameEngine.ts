import { Command, RobotState, Direction, LevelConfig } from './types';

export class GameEngine {
  private robotState: RobotState;
  private config: LevelConfig;
  private executionLog: Array<(state: RobotState) => void> = [];

  constructor(config: LevelConfig) {
    this.config = config;
    this.robotState = {
      x: config.startX,
      y: config.startY,
      direction: 'UP',
      isMoving: false,
      isSuccess: false,
      isFailed: false,
    };
  }

  getRobotState(): RobotState {
    return { ...this.robotState };
  }

  reset(): void {
    this.robotState = {
      x: this.config.startX,
      y: this.config.startY,
      direction: 'UP',
      isMoving: false,
      isSuccess: false,
      isFailed: false,
    };
    this.executionLog = [];
  }

  private isObstacle(x: number, y: number): boolean {
    return this.config.obstacles?.some((obs) => obs.x === x && obs.y === y) || false;
  }

  private isOutOfBounds(x: number, y: number): boolean {
    return x < 0 || x >= this.config.gridWidth || y < 0 || y >= this.config.gridHeight;
  }

  private canMove(x: number, y: number): boolean {
    return !this.isOutOfBounds(x, y) && !this.isObstacle(x, y);
  }

  private getNextPosition(
    x: number,
    y: number,
    direction: Direction
  ): [number, number] {
    switch (direction) {
      case 'UP':
        return [x, y - 1];
      case 'DOWN':
        return [x, y + 1];
      case 'LEFT':
        return [x - 1, y];
      case 'RIGHT':
        return [x + 1, y];
    }
  }

  private turnLeft(): Direction {
    const directions: Direction[] = ['UP', 'LEFT', 'DOWN', 'RIGHT'];
    const currentIndex = directions.indexOf(this.robotState.direction);
    return directions[(currentIndex + 1) % 4];
  }

  private turnRight(): Direction {
    const directions: Direction[] = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
    const currentIndex = directions.indexOf(this.robotState.direction);
    return directions[(currentIndex + 1) % 4];
  }

  private hasObstacleAhead(): boolean {
    const [nextX, nextY] = this.getNextPosition(
      this.robotState.x,
      this.robotState.y,
      this.robotState.direction
    );
    return this.isObstacle(nextX, nextY) || this.isOutOfBounds(nextX, nextY);
  }

  private executeCommand(command: Command): boolean {
    switch (command.type) {
      case 'MOVE_FORWARD': {
        const [nextX, nextY] = this.getNextPosition(
          this.robotState.x,
          this.robotState.y,
          this.robotState.direction
        );

        if (!this.canMove(nextX, nextY)) {
          this.robotState.isFailed = true;
          return false;
        }

        this.robotState.x = nextX;
        this.robotState.y = nextY;
        return true;
      }

      case 'TURN_LEFT': {
        this.robotState.direction = this.turnLeft();
        return true;
      }

      case 'TURN_RIGHT': {
        this.robotState.direction = this.turnRight();
        return true;
      }

      case 'REPEAT': {
        if (!command.commands) return true;
        const repeatCount = command.repeatCount || 1;

        for (let i = 0; i < repeatCount; i++) {
          for (const innerCmd of command.commands) {
            const result = this.executeCommand(innerCmd);
            if (!result) return false;
          }
        }
        return true;
      }

      case 'IF_OBSTACLE': {
        if (!this.hasObstacleAhead()) {
          return true;
        }
        if (!command.commands) return true;

        for (const innerCmd of command.commands) {
          const result = this.executeCommand(innerCmd);
          if (!result) return false;
        }
        return true;
      }

      default:
        return true;
    }
  }

  async executeCommands(commands: Command[]): Promise<RobotState> {
    this.robotState.isSuccess = false;
    this.robotState.isFailed = false;

    for (const command of commands) {
      const success = this.executeCommand(command);
      if (!success) {
        return { ...this.robotState };
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    const isAtGoal =
      this.robotState.x === this.config.goalX && this.robotState.y === this.config.goalY;

    if (isAtGoal) {
      this.robotState.isSuccess = true;
    } else {
      this.robotState.isFailed = true;
    }

    return { ...this.robotState };
  }
}
