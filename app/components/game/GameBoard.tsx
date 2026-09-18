import React from 'react';
import { Robot } from './Robot';
import { RobotState, LevelConfig } from './types';

interface GameBoardProps {
  config: LevelConfig;
  robotState: RobotState;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  config,
  robotState,
  onDragOver,
  onDrop,
}) => {
  const cellSize = 60;
  const boardWidth = config.gridWidth * cellSize;
  const boardHeight = config.gridHeight * cellSize;

  const isObstacle = (x: number, y: number): boolean => {
    return config.obstacles?.some((obs) => obs.x === x && obs.y === y) || false;
  };

  const isGoal = (x: number, y: number): boolean => {
    return x === config.goalX && y === config.goalY;
  };

  return (
    <div
      className="bg-[var(--white)] rounded-xl border-4 border-[var(--border-gray)] shadow-lg p-2 inline-block"
      style={{
        width: `${boardWidth + 16}px`,
        height: `${boardHeight + 16}px`,
      }}
    >
      <svg
        width={boardWidth}
        height={boardHeight}
        className="bg-checkerboard"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <defs>
          <pattern
            id="checkerboard"
            x={cellSize}
            y={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width={cellSize} height={cellSize} fill="var(--white)" />
            <rect x={cellSize} y="0" width={cellSize} height={cellSize} fill="var(--bg-light)" />
            <rect x="0" y={cellSize} width={cellSize} height={cellSize} fill="var(--bg-light)" />
            <rect x={cellSize} y={cellSize} width={cellSize} height={cellSize} fill="var(--white)" />
          </pattern>
        </defs>

        <rect width={boardWidth} height={boardHeight} fill="url(#checkerboard)" />

        {Array.from({ length: config.gridWidth }).map((_, x) =>
          Array.from({ length: config.gridHeight }).map((_, y) => (
            <g key={`${x}-${y}`}>
              <line
                x1={x * cellSize}
                y1={0}
                x2={x * cellSize}
                y2={boardHeight}
                stroke="var(--border-gray)"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1={0}
                y1={y * cellSize}
                x2={boardWidth}
                y2={y * cellSize}
                stroke="var(--border-gray)"
                strokeWidth="1"
                opacity="0.3"
              />

              {isGoal(x, y) && (
                <circle
                  cx={x * cellSize + cellSize / 2}
                  cy={y * cellSize + cellSize / 2}
                  r={cellSize * 0.25}
                  fill="var(--success-green)"
                  opacity="0.3"
                />
              )}

              {isObstacle(x, y) && (
                <rect
                  x={x * cellSize + cellSize * 0.1}
                  y={y * cellSize + cellSize * 0.1}
                  width={cellSize * 0.8}
                  height={cellSize * 0.8}
                  fill="var(--warning-orange)"
                  opacity="0.5"
                  rx={cellSize * 0.1}
                />
              )}
            </g>
          ))
        )}

        <Robot
          state={robotState}
          cellSize={cellSize}
          gridWidth={config.gridWidth}
          gridHeight={config.gridHeight}
        />
      </svg>
    </div>
  );
};
