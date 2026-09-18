import React, { useState } from 'react';
import { PrimaryButton } from '../ui/Button';

interface WelcomeScreenProps {
  onStart: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light)] to-[var(--bg-dark)] flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-4">
          Code Adventure
        </h1>
        <p className="text-xl text-[var(--text-light)] mb-8">
          Learn to program with a friendly robot
        </p>

        <div className="mb-12 p-6 bg-[var(--white)] rounded-xl shadow-lg">
          <p className="text-[var(--text-dark)] mb-6">
            Guide your robot to the goal using command blocks. Arrange blocks to create a program that moves the robot step by step.
          </p>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-[var(--text-dark)] mb-4">
              Select Difficulty:
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {(['easy', 'medium', 'hard'] as const).map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value={level}
                    checked={difficulty === level}
                    onChange={(e) => setDifficulty(e.target.value as any)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="text-[var(--text-dark)] font-medium capitalize">
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <PrimaryButton onClick={() => onStart(difficulty)} className="w-full md:w-auto">
            Start Playing
          </PrimaryButton>
        </div>

        <div className="text-sm text-[var(--text-light)]">
          <p>🎮 Drag command blocks to your program</p>
          <p>▶️ Click "Run" to execute your program</p>
          <p>🎯 Guide the robot to reach the goal</p>
        </div>
      </div>
    </div>
  );
};
