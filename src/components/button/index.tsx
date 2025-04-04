import type { ComponentProps } from 'react';
import styles from './styles.module.css';

type ButtonProps = ComponentProps<'button'> & {
  children: React.ReactNode;
  variant?: 'primary' | 'destructive';
};

export function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
