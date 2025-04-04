import type { ComponentProps } from 'react';
import styles from './styles.module.css';

type LinkIconProps = ComponentProps<'a'> & {
  children: React.ReactNode;
};

export function LinkIcon({ children, ...props }: LinkIconProps) {
  return (
    <a {...props} className={styles.linkIcon}>
      {children}
    </a>
  );
}
