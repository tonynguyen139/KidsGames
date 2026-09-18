import React, { useState } from 'react';
import { Command } from './types';

interface CommandBlockProps {
  command: Command;
  index?: number;
  onDragStart?: (e: React.DragEvent, command: Command) => void;
  onRemove?: (id: string) => void;
  isDragging?: boolean;
  inPalette?: boolean;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'MOVE_FORWARD':
      return '↑';
    case 'TURN_LEFT':
      return '←';
    case 'TURN_RIGHT':
      return '→';
    case 'REPEAT':
      return '⟳';
    case 'IF_OBSTACLE':
      return '?';
    default:
      return '▶';
  }
};

export const CommandBlock: React.FC<CommandBlockProps> = ({
  command,
  onDragStart,
  onRemove,
  isDragging = false,
  inPalette = true,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      draggable={inPalette}
      onDragStart={(e) => {
        if (inPalette && onDragStart) {
          onDragStart(e, command);
        }
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`
        flex items-center justify-center gap-2 px-3 py-2 rounded-md
        font-semibold text-white text-sm cursor-grab active:cursor-grabbing
        transition-all duration-150 shadow-md hover:shadow-lg
        ${isDragging ? 'scale-105 shadow-lg' : ''}
        ${isHovering && inPalette ? 'scale-105' : ''}
      `}
      style={{ backgroundColor: command.color }}
    >
      <span className="text-lg">{getIcon(command.type)}</span>
      <span className="text-xs font-bold">{command.label}</span>
      {command.repeatCount && <span className="text-xs">×{command.repeatCount}</span>}
      {!inPalette && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(command.id);
          }}
          className="ml-auto text-lg hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
      )}
    </div>
  );
};

interface CommandPaletteProps {
  commands: Command[];
  onDragStart: (e: React.DragEvent, command: Command) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  commands,
  onDragStart,
}) => {
  return (
    <div className="bg-[var(--bg-dark)] p-4 rounded-lg border border-[var(--border-gray)]">
      <h3 className="text-sm font-bold mb-3 text-[var(--text-dark)]">Command Blocks</h3>
      <div className="flex flex-wrap gap-2">
        {commands.map((cmd) => (
          <CommandBlock
            key={`palette-${cmd.type}`}
            command={cmd}
            onDragStart={onDragStart}
            inPalette={true}
          />
        ))}
      </div>
    </div>
  );
};

interface CommandSequenceProps {
  commands: Command[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const CommandSequence: React.FC<CommandSequenceProps> = ({
  commands,
  onRemove,
  onClear,
}) => {
  return (
    <div className="bg-[var(--white)] p-4 rounded-lg border-2 border-dashed border-[var(--border-gray)] min-h-32">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-[var(--text-dark)]">Your Program</h3>
        {commands.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-[var(--text-light)] hover:text-[var(--warning-orange)] transition-colors"
          >
            Clear
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {commands.length === 0 ? (
          <p className="text-xs text-[var(--text-light)] italic">Drag blocks here...</p>
        ) : (
          commands.map((cmd, idx) => (
            <CommandBlock
              key={cmd.id}
              command={cmd}
              index={idx}
              onRemove={onRemove}
              inPalette={false}
            />
          ))
        )}
      </div>
    </div>
  );
};
