import React from 'react';
import { RobotState, Direction } from './types';

interface RobotProps {
  state: RobotState;
  cellSize: number;
  gridWidth: number;
  gridHeight: number;
}

const getRotation = (direction: Direction): number => {
  switch (direction) {
    case 'UP':
      return 0;
    case 'RIGHT':
      return 90;
    case 'DOWN':
      return 180;
    case 'LEFT':
      return 270;
  }
};

export const Robot: React.FC<RobotProps> = ({
  state,
  cellSize,
  gridWidth,
  gridHeight,
}) => {
  const x = state.x * cellSize + cellSize / 2;
  const y = state.y * cellSize + cellSize / 2;
  const rotation = getRotation(state.direction);

  const robotSize = cellSize * 0.8;

  return (
    <g
      style={{
        animation: state.isSuccess
          ? 'success-hop 0.6s ease-in-out'
          : state.isFailed
          ? 'shake 0.3s'
          : 'bobbing 3s ease-in-out infinite',
      }}
    >
      <g
        transform={`translate(${x}, ${y}) rotate(${rotation})`}
        style={{ transformOrigin: 'center center' }}
      >
        <rect
          x={-robotSize / 2}
          y={-robotSize / 2}
          width={robotSize}
          height={robotSize}
          fill="var(--robot-body)"
          rx={robotSize * 0.15}
        />

        <circle
          cx={0}
          cy={-robotSize * 0.3}
          r={robotSize * 0.3}
          fill="var(--robot-body)"
        />

        <circle
          cx={-robotSize * 0.15}
          cy={-robotSize * 0.35}
          r={robotSize * 0.08}
          fill="var(--white)"
        />
        <circle
          cx={-robotSize * 0.15}
          cy={-robotSize * 0.35}
          r={robotSize * 0.04}
          fill="var(--text-dark)"
        />

        <circle
          cx={robotSize * 0.15}
          cy={-robotSize * 0.35}
          r={robotSize * 0.08}
          fill="var(--white)"
        />
        <circle
          cx={robotSize * 0.15}
          cy={-robotSize * 0.35}
          r={robotSize * 0.04}
          fill="var(--text-dark)"
        />

        <rect
          x={-robotSize * 0.4}
          y={-robotSize * 0.1}
          width={robotSize * 0.8}
          height={robotSize * 0.2}
          fill="var(--robot-accent)"
          opacity="0.7"
        />
      </g>

      {state.isSuccess && (
        <circle
          cx={x}
          cy={y}
          r={cellSize * 0.5}
          fill="none"
          stroke="var(--success-green)"
          strokeWidth="2"
          opacity="0.5"
          style={{
            animation: 'pulse 0.6s ease-out',
          }}
        />
      )}
    </g>
  );
};
