import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = false, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-lg border border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white overflow-hidden shadow-sm',
        hoverable && 'transition-shadow hover:shadow-md',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

Card.Header = function CardHeader({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) {
  return (
    <div className={cn('px-6 py-5 border-b border-gray-200 dark:border-dark-600', className)}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) {
  return <div className={cn('px-6 py-5', className)}>{children}</div>;
};

Card.Footer = function CardFooter({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) {
  return (
    <div className={cn('px-6 py-4 bg-gray-50 dark:bg-dark-600 border-t border-gray-200 dark:border-dark-600', className)}>
      {children}
    </div>
  );
};