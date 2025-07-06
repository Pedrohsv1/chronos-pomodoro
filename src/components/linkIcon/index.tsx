import type { ComponentProps } from 'react';
import styles from './styles.module.css';
import { RouterLink } from '../routerLink';

type LinkIconProps = ComponentProps<'a'> & {
  children: React.ReactNode;
  href: string;
};

export function LinkIcon({ children, href, ...props }: LinkIconProps) {
  return (
    <RouterLink href={href} {...props} className={styles.linkIcon}>
      {children}
    </RouterLink>
  );
}
