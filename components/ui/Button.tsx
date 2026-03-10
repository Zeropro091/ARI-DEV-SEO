import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyle = "font-mono font-bold px-6 py-3 border-2 border-neu-border transition-all duration-200 flex items-center gap-2 text-sm sm:text-base";
  
  const variants = {
    primary: "bg-neu-lime hover:bg-neu-pink shadow-neu hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neu-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-neu-pressed",
    secondary: "bg-neu-blue hover:bg-neu-purple shadow-neu hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neu-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-neu-pressed",
    outline: "bg-white hover:bg-gray-100 shadow-neu hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neu-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-neu-pressed",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
