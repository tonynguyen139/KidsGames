# Code Adventure – Wireframes (5 Screens)

## Screen 1: Welcome Screen

```
┌─────────────────────────────────────┐
│                                     │
│     🤖 CODE ADVENTURE 🤖            │
│                                     │
│   Learn to program with a           │
│   friendly robot!                   │
│                                     │
│    ┌─────────────────────────┐      │
│    │   START PLAYING ➜       │      │
│    └─────────────────────────┘      │
│                                     │
│   Choose Your Difficulty:           │
│                                     │
│   ○ Easy      (3 moves max)        │
│   ○ Medium    (5 moves max)        │
│   ○ Hard      (10 moves max)       │
│                                     │
└─────────────────────────────────────┘

Layout Notes:
- Centered vertical flex layout
- Robot emoji or simple illustration at top
- Title: 28px bold blue
- Instructions: 14px gray
- Primary button with arrow icon
- Radio button group below
- Responsive: Full width on mobile with padding
```

---

## Screen 2: Level 1 – Sequence

```
┌───────────────────────────────────────────────────────────┐
│ ← Back          Level 1: Reach the Star              🏆 0  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  GAME BOARD                    │  INSTRUCTIONS            │
│  ┌─────────────────────┐       │  Move the robot to      │
│  │ . . . . . . . . . . │       │  the star in 4 moves.   │
│  │ . . . . . . . . . . │       │  You can only move       │
│  │ . . 🤖 . . . . . . . │       │  forward or turn.       │
│  │ . . . . . . . . . . │       │  ─────────────────────   │
│  │ . . . . . ⭐ . . . . │       │                         │
│  │ . . . . . . . . . . │       │  AVAILABLE BLOCKS:      │
│  └─────────────────────┘       │                         │
│                                │  [→ FORWARD] [↻ RIGHT]  │
│  WORKSPACE:                    │  [↺ LEFT]               │
│  ┌─────────────────────┐       │                         │
│  │ [→ FWD] [↻ TURN]    │       │  YOUR SEQUENCE:         │
│  │ [→ FWD] [↻ TURN]    │       │  ┌──────────────────┐   │
│  │                     │       │  │ [→][→][↻][→]    │   │
│  │                     │       │  └──────────────────┘   │
│  └─────────────────────┘       │                         │
│                                │  [RUN] [RESET] [NEXT]  │
│  [DELETE] [CLEAR ALL]          │                         │
└───────────────────────────────────────────────────────────┘

Mobile Layout (Stacked):
├─ Header + Level Title
├─ Game Board (full width)
├─ Instructions (panel)
├─ Block Palette (scrollable horizontal)
├─ Workspace
└─ Buttons
```

---

## Screen 3: Level 2 – Loops/Repeat

```
┌───────────────────────────────────────────────────────────┐
│ ← Back          Level 2: Create a Loop                 🏆 1  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  GAME BOARD                    │  INSTRUCTIONS            │
│  ┌─────────────────────┐       │  Use a REPEAT block to  │
│  │ . . . . . . . . . . │       │  move to the star more  │
│  │ . . . . . . . . . . │       │  efficiently!           │
│  │ . . 🤖 . . . . . . . │       │                         │
│  │ . . . . . . . . . . │       │  • REPEAT block: Loop   │
│  │ . . . . . ⭐ . . . . │       │    commands inside      │
│  │ . . . . . . . . . . │       │    a set number of      │
│  └─────────────────────┘       │    times.               │
│                                │                         │
│  WORKSPACE:                    │  AVAILABLE BLOCKS:      │
│  ┌─────────────────────┐       │                         │
│  │ ┌─ [REPEAT 2x] ──┐ │       │  [→][↻][↺][🔁 LOOP]   │
│  │ │ [→ FWD]        │ │       │                         │
│  │ │ [↻ TURN RIGHT] │ │       │  YOUR SEQUENCE:         │
│  │ └────────────────┘ │       │  ┌──────────────────┐   │
│  │ [↻ TURN RIGHT]     │       │  │ [LOOP 2x]       │   │
│  │                    │       │  │   [→][↻]       │   │
│  └─────────────────────┘       │  └──────────────────┘   │
│                                │                         │
│  [DELETE] [CLEAR ALL]          │  [RUN] [RESET] [NEXT]  │
└───────────────────────────────────────────────────────────┘

Visual Notes:
- Repeat block shown with clear nesting/indentation
- Nested blocks slightly indented
- Color change for loop blocks (yellow background)
```

---

## Screen 4: Level 3 – Conditionals

```
┌───────────────────────────────────────────────────────────┐
│ ← Back          Level 3: Make Decisions               🏆 2  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  GAME BOARD                    │  INSTRUCTIONS            │
│  ┌─────────────────────┐       │  Use an IF block to     │
│  │ . . 🔵 . . . . . . . │       │  change behavior based  │
│  │ . . 🤖 . . . . . . . │       │  on what's ahead!       │
│  │ . . . . . . . . . . │       │                         │
│  │ . . . . . ⭐ . . . . │       │  • IF block: Choose     │
│  │ . . . . . . . . . . │       │    action based on       │
│  │ . . . . . . . . . . │       │    what's in front       │
│  └─────────────────────┘       │    (empty/wall/goal)    │
│                                │                         │
│  WORKSPACE:                    │  AVAILABLE BLOCKS:      │
│  ┌─────────────────────┐       │                         │
│  │ [→ FORWARD]         │       │  [→][↻][↺][🔁][❓ IF]  │
│  │ ┌─ [IF PATH CLEAR] ┐│       │                         │
│  │ │ [→ FWD]          ││       │  YOUR SEQUENCE:         │
│  │ │ [REPEAT 2x] →    ││       │  ┌──────────────────┐   │
│  │ └──────────────────┘│       │  │ [→]            │   │
│  │                    │       │  │ [IF PATH CLEAR]│   │
│  │                    │       │  │   [→]          │   │
│  └─────────────────────┘       │  └──────────────────┘   │
│                                │                         │
│  [DELETE] [CLEAR ALL]          │  [RUN] [RESET] [NEXT]  │
└───────────────────────────────────────────────────────────┘

Visual Notes:
- Conditional block shows with diamond icon (❓ or ⬥)
- Two branches visible (TRUE/FALSE paths)
- Purple color for conditional blocks
```

---

## Screen 5: Success/Congratulations

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│                   🎉 GREAT JOB! 🎉                   │
│                                                       │
│              YOU COMPLETED LEVEL 3! 🌟               │
│                                                       │
│                  ✓ Goal Reached                      │
│                  ✓ Efficient Solution                │
│                                                       │
│           🤖 The robot learned today!                │
│                                                       │
│          Your Code Adventure Continues...            │
│                                                       │
│      ┌──────────────────────────────┐                │
│      │      NEXT LEVEL ➜            │                │
│      └──────────────────────────────┘                │
│                                                       │
│      ┌──────────────────────────────┐                │
│      │      REPLAY THIS LEVEL        │                │
│      └──────────────────────────────┘                │
│                                                       │
│      [HOME] [SHARE SCORE]                            │
│                                                       │
│  Confetti animation (subtle, few particles)          │
│  Background color pulse between blue and light       │
│                                                       │
└───────────────────────────────────────────────────────┘

Modal Overlay Notes:
- Centered on screen
- Slight blur/dim background
- Fade in animation (200ms)
- Celebration elements:
  • Confetti falls gently
  • Background color pulses (2s cycle)
  • Text has subtle scale animation
```

---

## Responsive Considerations

### Desktop (> 1024px)
- Two-column layout (board + instructions/palette)
- Commands displayed as grid
- Large hit targets for blocks

### Tablet (768px - 1024px)
- Adjustable layout, may stack
- Board maintains square aspect ratio
- Touch-friendly block sizes

### Mobile (< 768px)
- Full-width single column
- Board scales to fit screen
- Horizontal scroll for block palette
- Buttons stack vertically
- Commands appear as horizontal list with scroll

---

## Animation States

### Robot Animations
1. **Idle (Loop)**: Gentle bobbing, 3-second cycle
2. **Moving Forward**: Slide to next grid cell (200ms)
3. **Turning**: 90° rotation (300ms)
4. **Success**: Hop animation + color flash to green
5. **Error/Wall**: Shake animation (3× shake, 50ms each)

### Block Interactions
1. **Hover**: Subtle shadow increase, scale 1.02
2. **Drag**: Scale 1.05, shadow increases, cursor changes to "grabbing"
3. **Drop Valid**: Snap animation (50ms ease-out)
4. **Drop Invalid**: Return to origin with spring animation

### Screen Transitions
1. **Page Load**: Fade in (300ms)
2. **Level Change**: Slide up with fade (300ms)
3. **Modal Success**: Scale up + fade in (200ms)

---

## Key Design Principles Applied

✓ **Child-Friendly**: Simple shapes, bright colors, friendly robot character  
✓ **Clear Feedback**: Animations confirm all user actions  
✓ **Intuitive**: Visual hierarchy guides users to next action  
✓ **Mobile-First**: All layouts tested at mobile size first  
✓ **Accessible**: High contrast, large touch targets, clear focus states  
✓ **Performance**: Minimal animations, hardware-accelerated transforms  
