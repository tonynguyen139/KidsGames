import React from 'react';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

interface SuccessScreenProps {
  level: number;
  totalLevels: number;
  onNext: () => void;
  onReplay: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  level,
  totalLevels,
  onNext,
  onReplay,
}) => {
  const isLastLevel = level === totalLevels;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-[var(--white)] rounded-2xl shadow-2xl p-8 max-w-md text-center"
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      >
        <div className="text-6xl mb-4">🎉</div>

        <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-2">
          Great Job!
        </h2>

        <p className="text-lg text-[var(--text-light)] mb-6">
          {isLastLevel ? 'You completed all levels!' : `You completed Level ${level}!`}
        </p>

        <div className="bg-[var(--bg-light)] rounded-lg p-4 mb-8">
          <p className="text-sm text-[var(--text-dark)]">
            Progress: {level} / {totalLevels}
          </p>
          <div className="w-full bg-[var(--bg-dark)] rounded-full h-2 mt-2">
            <div
              className="bg-[var(--success-green)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(level / totalLevels) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex gap-3 flex-col sm:flex-row justify-center">
          <SecondaryButton onClick={onReplay} className="flex-1">
            Replay
          </SecondaryButton>
          {!isLastLevel && (
            <PrimaryButton onClick={onNext} className="flex-1">
              Next Level
            </PrimaryButton>
          )}
          {isLastLevel && (
            <PrimaryButton onClick={onNext} className="flex-1">
              Return Home
            </PrimaryButton>
          )}
        </div>

        <p className="text-xs text-[var(--text-light)] mt-6">
          Keep practicing to master the art of coding!
        </p>
      </div>
    </div>
  );
};
