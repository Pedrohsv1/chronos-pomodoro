import type { ComponentProps } from 'react';
import styles from './styles.module.css';

type ButtonProps = ComponentProps<'button'> & {
  children?: React.ReactNode;
  variant?: 'primary' | 'destructive';
  icon?: React.ReactNode;
};

export function Button({
  variant = 'primary',
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`}>
      {icon}
      {icon && children && (
        <div
          style={{
            marginLeft: '8px',
          }}
        ></div>
      )}
      {children}
    </button>
  );
}
