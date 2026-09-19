import React, { useState, useRef, useEffect } from 'react';
import { GameBoard } from '../game/GameBoard';
import { CommandPalette, CommandSequence } from '../game/CommandBlock';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import { GameEngine } from '../game/gameEngine';
import { Command, RobotState, LevelConfig } from '../game/types';
import { LEVELS, PALETTE_COMMANDS, PALETTE_COMMANDS_LEVEL3 } from '../game/levels';
import { SuccessScreen } from './SuccessScreen';

interface GameScreenProps {
  levelIndex: number;
  onLevelComplete: () => void;
  onGoHome: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  levelIndex,
  onLevelComplete,
  onGoHome,
}) => {
  const levelConfig = LEVELS[levelIndex];
  const isLevel3 = levelIndex === 2;
  const paletteCommands = isLevel3 ? PALETTE_COMMANDS_LEVEL3 : PALETTE_COMMANDS;

  const [sequence, setSequence] = useState<Command[]>([]);
  const [robotState, setRobotState] = useState<RobotState>({
    x: levelConfig.startX,
    y: levelConfig.startY,
    direction: levelConfig.initialDirection || 'UP',
    isMoving: false,
    isSuccess: false,
    isFailed: false,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const engineRef = useRef(new GameEngine(levelConfig));

  const handleDragStart = (e: React.DragEvent, command: Command) => {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('command', JSON.stringify(command));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const commandData = e.dataTransfer.getData('command');
    if (commandData) {
      const command = JSON.parse(commandData);
      const newCommand: Command = {
        ...command,
        id: `${command.id}-${Date.now()}-${Math.random()}`,
      };
      setSequence([...sequence, newCommand]);
    }
  };

  const handleRemoveCommand = (id: string) => {
    setSequence(sequence.filter((cmd) => cmd.id !== id));
  };

  const handleClearSequence = () => {
    setSequence([]);
  };

  const handleRun = async () => {
    setIsRunning(true);
    const engine = new GameEngine(levelConfig);
    const result = await engine.executeCommands(sequence);
    setRobotState(result);

    if (result.isSuccess) {
      setTimeout(() => {
        setShowSuccess(true);
      }, 500);
    }

    setIsRunning(false);
  };

  const handleReset = () => {
    setSequence([]);
    setRobotState({
      x: levelConfig.startX,
      y: levelConfig.startY,
      direction: levelConfig.initialDirection || 'UP',
      isMoving: false,
      isSuccess: false,
      isFailed: false,
    });
    setShowSuccess(false);
  };

  const handleNextLevel = () => {
    if (levelIndex < LEVELS.length - 1) {
      onLevelComplete();
    } else {
      onGoHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light)] to-[var(--bg-dark)] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-[var(--text-dark)]">
              Level {levelIndex + 1}: {['Sequence', 'Loop', 'Condition'][levelIndex]}
            </h1>
            <button
              onClick={onGoHome}
              className="text-[var(--text-light)] hover:text-[var(--text-dark)] transition-colors"
            >
              ← Home
            </button>
          </div>
          <p className="text-[var(--text-light)]">
            Guide the robot to the goal by arranging command blocks.
          </p>
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Game Board */}
          <div className="lg:col-span-1 flex justify-center">
            <GameBoard
              config={levelConfig}
              robotState={robotState}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          </div>

          {/* Controls and Block Workspace */}
          <div className="lg:col-span-2 space-y-6">
            {/* Command Palette */}
            <CommandPalette
              commands={paletteCommands}
              onDragStart={handleDragStart}
            />

            {/* Command Workspace */}
            <CommandSequence
              commands={sequence}
              onRemove={handleRemoveCommand}
              onClear={handleClearSequence}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />

            {/* Control Buttons */}
            <div className="flex gap-3 flex-wrap">
              <PrimaryButton
                onClick={handleRun}
                disabled={isRunning || sequence.length === 0}
              >
                {isRunning ? '▶️ Running...' : '▶️ Run Program'}
              </PrimaryButton>
              <SecondaryButton onClick={handleReset} disabled={isRunning}>
                🔄 Reset
              </SecondaryButton>
            </div>

            {/* Feedback */}
            {robotState.isFailed && !isRunning && (
              <div className="bg-[var(--warning-orange)] bg-opacity-20 border-2 border-[var(--warning-orange)] rounded-lg p-4 text-[var(--text-dark)]">
                <p className="font-semibold">Try again! 🤔</p>
                <p className="text-sm">The robot couldn't reach the goal or hit an obstacle.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSuccess && (
        <SuccessScreen
          level={levelIndex + 1}
          totalLevels={LEVELS.length}
          onNext={handleNextLevel}
          onReplay={handleReset}
        />
      )}
    </div>
  );
};
