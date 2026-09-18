# Code Adventure

A visual block-based coding game for children ages 7-12 that teaches programming concepts through interactive gameplay.

## Overview

Code Adventure is an interactive educational game where players drag command blocks to create programs that control a robot. Through three progressively complex levels, players learn fundamental programming concepts:

- **Level 1: Sequence** - Basic movement commands (Move Forward, Turn Left, Turn Right)
- **Level 2: Loop** - Repeat blocks for efficient programming
- **Level 3: Condition** - Conditional logic with If Obstacle blocks

## Features

- 🤖 Animated robot sprite with smooth movements
- 🎮 Drag-and-drop command block interface
- 🎯 Three progressive difficulty levels
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Colorful, child-friendly UI
- ♿ Accessible with keyboard navigation and screen reader support
- ⚡ Fast, browser-based execution (no backend required)

## Tech Stack

- **Framework**: Next.js 16 with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS keyframes
- **Graphics**: SVG for robot and game board

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically reload as you make changes.

### Build

Create an optimized production build:

```bash
npm run build
```

### Production

Start the production server:

```bash
npm run start
```

## Deployment to Vercel

### Quick Deploy

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub (or connect your repository)
2. Import the project on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your application will be live at a Vercel URL.

### Manual Deployment

If you prefer to deploy manually:

1. Build the application: `npm run build`
2. Deploy the `.next` folder and `node_modules` to your hosting provider
3. Set the start command to: `npm run start`
4. Ensure Node.js 18+ is available on your host

## Game Instructions

### Welcome Screen
- Select your difficulty level (Easy, Medium, Hard)
- Click "Start Playing" to begin

### Level Screens
- **Game Board (Left)**: See your robot and the goal
- **Command Blocks (Right)**: Drag blocks to create your program
- **Run**: Click to execute your program
- **Reset**: Clear your program and restart the level

### Winning
- Guide the robot to reach the goal (green target)
- Complete all 3 levels to win

## Component Structure

```
app/
├── components/
│   ├── ui/
│   │   └── Button.tsx              # Button components
│   ├── game/
│   │   ├── types.ts                # Game type definitions
│   │   ├── CommandBlock.tsx         # Draggable command blocks
│   │   ├── Robot.tsx               # Robot sprite component
│   │   ├── GameBoard.tsx           # Game board with grid
│   │   ├── gameEngine.ts           # Game logic and execution
│   │   └── levels.ts               # Level configurations
│   └── screens/
│       ├── WelcomeScreen.tsx       # Welcome/start screen
│       ├── GameScreen.tsx          # Main game screen
│       └── SuccessScreen.tsx       # Level completion screen
├── globals.css                     # Global styles and animations
├── layout.tsx                      # Root layout
└── page.tsx                        # Main app component
```

## Game Engine

The `GameEngine` class handles:
- Robot state management (position, direction)
- Command execution (move, turn, repeat, conditions)
- Collision detection and boundary checking
- Goal validation
- Animation timing

## Accessibility

- WCAG AA color contrast
- Keyboard navigation support
- ARIA labels on interactive elements
- Reduced motion support
- Touch-friendly controls (44px+ touch targets)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Known Limitations

- No persistent save/load functionality (state resets on page reload)
- Animations use CSS transforms; complex sequences may vary by device
- Repeat blocks support static counts (no dynamic iteration parameters)
- No undo/redo within a level

## Future Enhancements

- User accounts and progress tracking
- Difficulty adjustments and custom challenges
- More advanced programming concepts (functions, variables)
- Multiplayer/competitive modes
- Level editor for custom content
- Sound effects and music

## License

This project is part of the Code Adventure educational initiative.

## Support

For issues, questions, or feedback, please refer to the original project documentation.

---

**Version**: 1.0.0  
**Last Updated**: September 2026
