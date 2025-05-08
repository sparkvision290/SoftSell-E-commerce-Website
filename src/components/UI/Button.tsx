import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500/20',
      secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-dark-600 dark:hover:bg-dark-500 dark:text-white focus:ring-gray-500/10',
      outline: 'border border-gray-300 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-600 text-gray-900 dark:text-white focus:ring-gray-500/10',
      ghost: 'hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-900 dark:text-white focus:ring-gray-500/10',
    };

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-5',
      lg: 'h-12 px-8 text-lg',
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-800 disabled:opacity-60 disabled:cursor-not-allowed',
          sizeClasses[size],
          variantClasses[variant],
          fullWidth ? 'w-full' : '',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;