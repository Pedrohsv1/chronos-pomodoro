import { TimerIcon } from 'lucide-react';

import styles from './styles.module.css';
import { RouterLink } from '../routerLink';

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink href='' className={styles.logoLink}>
        <TimerIcon className={styles.logoIcon} />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}
