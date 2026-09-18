# Code Adventure – Design Handoff Document

## Project Overview
**Code Adventure** is an interactive coding game for children ages 7-12 that teaches programming concepts through visual block-based coding. Players drag command blocks to create programs that control a robot.

---

## Color Palette

| Name | Hex Code | Usage |
|------|----------|-------|
| **Primary Blue** | `#4A90E2` | Primary buttons, active states, interactive elements |
| **Success Green** | `#2ECC71` | Success states, completion, correct solutions |
| **Warning Orange** | `#F39C12` | Warning states, important indicators |
| **Block Red** | `#E74C3C` | Movement/command blocks |
| **Block Yellow** | `#F1C40F` | Loop/repeat blocks |
| **Block Purple** | `#9B59B6` | Conditional/if blocks |
| **Block Green** | `#27AE60` | Function/action blocks |
| **Background Light** | `#F8F9FA` | Main background, card backgrounds |
| **Background Dark** | `#ECF0F1` | Secondary backgrounds |
| **Text Dark** | `#2C3E50` | Primary text |
| **Text Light** | `#7F8C8D` | Secondary text, hints |
| **White** | `#FFFFFF` | Card surfaces, overlays |
| **Border Gray** | `#BDC3C7` | Borders, dividers |

---

## Typography

### Font Families
- **Headers & UI Elements**: "Nunito Sans" (system fallback: -apple-system, sans-serif)
  - Friendly, rounded, child-appropriate
- **Body Text**: "Inter" (system fallback: -apple-system, sans-serif)
  - Clear and legible
- **Monospace (for code)**: "Menlo" / "Monaco" (system fallback: monospace)

### Font Sizes
| Element | Size | Weight | Line-height |
|---------|------|--------|-------------|
| Page Title | 28px | 700 (Bold) | 1.2 |
| Section Headers | 20px | 700 (Bold) | 1.3 |
| Block Labels | 14px | 600 (Semi-bold) | 1.4 |
| Body Text | 14px | 400 (Regular) | 1.6 |
| Button Text | 14px | 600 (Semi-bold) | 1.4 |
| Captions | 12px | 400 (Regular) | 1.5 |

---

## Button Styles

### Primary Button (CTA)
```
Background: #4A90E2 (Primary Blue)
Text Color: #FFFFFF (White)
Padding: 12px 24px
Border Radius: 8px
Font: 14px, 600 weight, Nunito Sans
Box Shadow: 0 2px 8px rgba(74, 144, 226, 0.3)
Hover State: Background #357ABD (darker blue)
Active State: Background #2557A5 (even darker)
Transition: all 200ms ease
```

### Secondary Button
```
Background: #ECF0F1 (Light Gray)
Text Color: #2C3E50 (Dark Text)
Padding: 12px 24px
Border: 2px solid #BDC3C7 (Border Gray)
Border Radius: 8px
Font: 14px, 600 weight, Nunito Sans
Hover State: Background #FFFFFF, Border #4A90E2
Transition: all 200ms ease
```

### Small Icon Button
```
Width/Height: 40px
Padding: 8px
Border Radius: 6px
Background: transparent
Hover State: Background #ECF0F1
Icon Size: 24px
```

---

## Command Blocks (Draggable UI Components)

### Block Container
```
Width: 120px (base size)
Height: 48px
Border Radius: 6px
Font: 12px, 600 weight (Nunito Sans)
Text Color: #FFFFFF (White)
Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
Padding: 8px 12px
Cursor: grab (hover), grabbing (dragging)
Transition: transform 150ms ease, box-shadow 150ms ease
Drag Feedback: Slight scale increase (1.05), shadow enhancement
```

### Block Types & Colors
- **Move Forward** – Red `#E74C3C` – Icon: Arrow up
- **Turn Right** – Red `#E74C3C` – Icon: Right arrow curve
- **Turn Left** – Red `#E74C3C` – Icon: Left arrow curve
- **Repeat/Loop** – Yellow `#F1C40F` – Icon: Loop arrows (Text color: #2C3E50)
- **If Condition** – Purple `#9B59B6` – Icon: Question mark
- **Action** – Green `#27AE60` – Icon: Star or action symbol

---

## Robot Sprite Design

### Appearance
- **Shape**: Simple geometric robot (square body, circular head)
- **Style**: Flat design, friendly expression
- **Size on Grid**: 60px × 60px
- **Colors**: 
  - Body: `#34495E` (Dark gray-blue)
  - Head: `#34495E` (matching)
  - Eyes: `#FFFFFF` with `#2C3E50` pupils (friendly gaze)
  - Accent Stripe: `#4A90E2` (across chest)

### Animation States
- **Idle**: Slight bobbing motion (3s cycle, 2px movement)
- **Moving**: Smooth slide animation (based on grid cell size)
- **Turning**: 90° rotation (300ms duration, ease-out)
- **Success**: Celebration animation (hop + color flash to green)
- **Failure**: Shake animation (50ms × 3 shakes, 5px movement)

---

## Grid/Game Board Layout

### Board Container
```
Desktop: 600px × 400px
Mobile: Full width - 32px padding, max 320px
Background: #FFFFFF (White)
Border: 3px solid #BDC3C7 (Border Gray)
Border Radius: 12px
Box Shadow: 0 8px 24px rgba(0, 0, 0, 0.12)
```

### Grid Cells
```
Size: 60px × 60px (desktop), 50px × 50px (mobile)
Border: 1px solid #ECF0F1
Background: Alternating #FFFFFF and #F8F9FA for checkerboard effect
```

### Grid Coordinates
- **Desktop**: 10 columns × 6 rows
- **Mobile**: 6 columns × 6 rows
- **Responsive Breakpoint**: 768px

---

## Screen Layouts

### 1. Welcome Screen
```
Layout: Centered vertical flex
- Logo/Title: "Code Adventure" (28px, bold)
- Subtitle: "Learn to program with a friendly robot" (14px, light gray)
- CTA Button: "Start Playing" (Primary Button)
- Difficulty Selection (radio buttons):
  • Easy
  • Medium
  • Hard
- Spacing: 24px between elements
```

### 2. Level Screens (1, 2, 3)
```
Layout: Two-column responsive
Left (40%): Game board + robot
Right (60%): 
  - Level title & instructions
  - Command block palette (draggable blocks)
  - Block workspace (drop zone)
  - Run / Reset / Next buttons

Mobile (stacked):
  - Top: Game board (full width)
  - Middle: Instructions
  - Bottom: Command palette & blocks
```

### 3. Success/Congratulations Screen
```
Layout: Centered modal overlay
- Celebration animation (particles, color pulse)
- Message: "Great job! 🎉" (20px, bold)
- Score/Stats (if applicable)
- Buttons: 
  • "Next Level" (Primary)
  • "Replay" (Secondary)
- Confetti animation overlay (optional, keep light)
```

---

## Interaction Patterns

### Drag & Drop (Block Placement)
1. **Grab State**: Cursor changes to `grab`, block shows slight hover highlight
2. **Drag State**: Block scales to 1.05, follows cursor, shadow increases
3. **Drop Zone Feedback**: Target area highlights when block enters (subtle background color change)
4. **Drop Confirmation**: 
   - If valid: Block snaps to grid/workspace, snap animation (50ms)
   - If invalid: Block returns to original position, shake animation
5. **Remove Block**: Drag off workspace = block returns to palette OR double-click to remove

### Run Button Flow
1. **Click "Run"** → Button disabled + spinner icon appears
2. **Robot Executes** → Robot moves/turns according to block sequence
3. **Completion** → 
   - If goal reached: Success screen + celebratory animation
   - If goal not reached: Message "Try again!" + reset option

### Screen Transitions
- **Fade** for modal overlays (200ms)
- **Slide** for level progression (300ms, smooth easing)
- **Scale** for button responses (150ms)

---

## Mobile Responsiveness

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px – 1024px
- **Desktop**: > 1024px

### Mobile Adaptations
1. **Game Board**: Reduces to 320px max width, maintains square aspect ratio
2. **Block Palette**: Scrollable horizontal list instead of grid
3. **Text**: Scales proportionally (button text remains 14px minimum)
4. **Spacing**: Reduces from 24px to 16px
5. **Touch Targets**: Minimum 44px height for interactive elements
6. **Drag Tolerance**: Increased to 20px for easier touch interaction

### Touch Interactions
- Blocks use 200ms delay to distinguish tap (select) from drag
- Two-finger swipe to undo last action (on mobile)
- Long-press (500ms) to preview block function

---

## Component Inventory

### Ready for Development

#### 1. **Button Components**
- `<PrimaryButton />` – CTA style
- `<SecondaryButton />` – Alternative action
- `<IconButton />` – Compact icon-only button

#### 2. **Block Components**
- `<CommandBlock />` – Draggable single block
- `<BlockPalette />` – Container of available blocks
- `<BlockWorkspace />` – Drop zone for block sequence

#### 3. **Robot Component**
- `<Robot />` – Animated robot sprite with state management (idle, moving, turning, success, failure)

#### 4. **Board Component**
- `<GameBoard />` – Grid container with robot renderer
- `<GridCell />` – Individual cell

#### 5. **Screen Components**
- `<WelcomeScreen />` – Entry point
- `<GameScreen />` – Main level play area
- `<SuccessScreen />` – Completion feedback

#### 6. **UI Utilities**
- `<Modal />` – Overlay container
- `<Spinner />` – Loading indicator
- `<Tooltip />` – Hover hints

---

## Accessibility Requirements

- **Color Contrast**: All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus States**: Clear visible focus ring on all interactive elements (2px blue outline, 2px offset)
- **Keyboard Navigation**: Tab through all blocks and buttons
- **Screen Readers**: ARIA labels on all interactive elements
- **Text Alternatives**: Icons paired with text labels
- **Motion**: Provide reduced-motion option (respects `prefers-reduced-motion` media query)

---

## Performance Notes

- **Block Dragging**: Use CSS transforms + hardware acceleration for smooth 60fps
- **Robot Animation**: Use CSS keyframes or canvas for movement (avoid layout thrashing)
- **Image Optimization**: Use SVG for icons/robot; WebP with PNG fallback for any raster graphics
- **Bundle Size Target**: Core components < 150KB gzipped

---

## Next Steps for Developer

1. Set up component library with base colors as CSS variables
2. Implement responsive grid system (use CSS Grid or flexbox)
3. Build drag-and-drop system (recommend React DnD or custom pointer events)
4. Create robot sprite + animation system
5. Wire up game logic (block execution, collision detection, goal checking)
6. Test on mobile devices (iOS Safari, Android Chrome)

---

**Design System Version**: 1.0  
**Last Updated**: 2026-09-18
