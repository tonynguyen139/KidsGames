import { LevelConfig, Command } from './types';

export const LEVELS: LevelConfig[] = [
  {
    gridWidth: 10,
    gridHeight: 6,
    startX: 1,
    startY: 5,
    goalX: 8,
    goalY: 5,
    obstacles: [],
    maxCommands: 10,
    initialDirection: 'RIGHT',
  },
  {
    gridWidth: 10,
    gridHeight: 6,
    startX: 1,
    startY: 5,
    goalX: 8,
    goalY: 1,
    obstacles: [
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
    ],
    maxCommands: 12,
    initialDirection: 'UP',
  },
  {
    gridWidth: 10,
    gridHeight: 6,
    startX: 1,
    startY: 5,
    goalX: 8,
    goalY: 1,
    obstacles: [
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 7, y: 2 },
      { x: 7, y: 3 },
    ],
    maxCommands: 15,
    initialDirection: 'UP',
  },
];

export const PALETTE_COMMANDS: Command[] = [
  {
    id: 'move',
    type: 'MOVE_FORWARD',
    label: 'Move',
    color: '#E74C3C',
  },
  {
    id: 'left',
    type: 'TURN_LEFT',
    label: 'Left',
    color: '#E74C3C',
  },
  {
    id: 'right',
    type: 'TURN_RIGHT',
    label: 'Right',
    color: '#E74C3C',
  },
  {
    id: 'repeat',
    type: 'REPEAT',
    label: 'Repeat',
    color: '#F1C40F',
    repeatCount: 2,
    commands: [],
  },
];

export const PALETTE_COMMANDS_LEVEL3: Command[] = [
  ...PALETTE_COMMANDS,
  {
    id: 'if_obstacle',
    type: 'IF_OBSTACLE',
    label: 'If Obstacle',
    color: '#9B59B6',
    commands: [],
  },
];
