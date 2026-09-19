export type CommandType = 'MOVE_FORWARD' | 'TURN_LEFT' | 'TURN_RIGHT' | 'REPEAT' | 'IF_OBSTACLE';
export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface Command {
  id: string;
  type: CommandType;
  label: string;
  color: string;
  repeatCount?: number;
  commands?: Command[];
}

export interface RobotState {
  x: number;
  y: number;
  direction: Direction;
  isMoving: boolean;
  isSuccess: boolean;
  isFailed: boolean;
}

export interface LevelConfig {
  gridWidth: number;
  gridHeight: number;
  startX: number;
  startY: number;
  goalX: number;
  goalY: number;
  obstacles: Array<{ x: number; y: number }>;
  maxCommands: number;
  initialDirection?: Direction;
}
