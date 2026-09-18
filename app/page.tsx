'use client';

import { useState } from 'react';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { GameScreen } from './components/screens/GameScreen';

type AppState = 'welcome' | 'playing';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleStartGame = (difficulty: 'easy' | 'medium' | 'hard') => {
    setCurrentLevel(0);
    setAppState('playing');
  };

  const handleLevelComplete = () => {
    const nextLevel = currentLevel + 1;
    if (nextLevel < 3) {
      setCurrentLevel(nextLevel);
    } else {
      setAppState('welcome');
      setCurrentLevel(0);
    }
  };

  const handleGoHome = () => {
    setAppState('welcome');
    setCurrentLevel(0);
  };

  return (
    <>
      {appState === 'welcome' ? (
        <WelcomeScreen onStart={handleStartGame} />
      ) : (
        <GameScreen
          levelIndex={currentLevel}
          onLevelComplete={handleLevelComplete}
          onGoHome={handleGoHome}
        />
      )}
    </>
  );
}
