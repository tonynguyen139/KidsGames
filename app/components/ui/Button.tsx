import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  ...props
}) => (
  <button
    className={`px-6 py-3 bg-[var(--primary-blue)] text-[var(--white)] font-semibold rounded-lg hover:bg-[#357ABD] active:bg-[#2557A5] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  ...props
}) => (
  <button
    className={`px-6 py-3 bg-[var(--bg-dark)] text-[var(--text-dark)] font-semibold border-2 border-[var(--border-gray)] rounded-lg hover:bg-[var(--white)] hover:border-[var(--primary-blue)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export const IconButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  icon,
  disabled = false,
  ...props
}) => (
  <button
    className={`w-10 h-10 p-2 rounded-md hover:bg-[var(--bg-dark)] transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    {...props}
  >
    {icon || children}
  </button>
);
