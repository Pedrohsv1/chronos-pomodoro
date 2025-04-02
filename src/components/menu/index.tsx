import { HistoryIcon, HomeIcon, Settings2Icon, SunIcon } from 'lucide-react';
import { LinkIcon } from '../button';

import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <LinkIcon href=''>
        <HomeIcon />
      </LinkIcon>
      <LinkIcon href=''>
        <HistoryIcon />
      </LinkIcon>
      <LinkIcon href=''>
        <Settings2Icon />
      </LinkIcon>
      <LinkIcon href=''>
        <SunIcon />
      </LinkIcon>
    </nav>
  );
}
