import { HistoryIcon, HomeIcon, Settings2Icon } from 'lucide-react';
import { ChangeTheme } from '../changeTheme';
import { LinkIcon } from '../linkIcon';

import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <LinkIcon href='/' aria-label='Go to home' title='Go to home'>
        <HomeIcon />
      </LinkIcon>
      <LinkIcon href='/history/' aria-label='See history' title='See history'>
        <HistoryIcon />
      </LinkIcon>
      <LinkIcon
        href='/settings/'
        aria-label='Configure preferences'
        title='Configure preferences'
      >
        <Settings2Icon />
      </LinkIcon>
      <ChangeTheme />
    </nav>
  );
}
