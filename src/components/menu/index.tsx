import { BugIcon, GaugeCircle, Table2Icon, TimerIcon } from 'lucide-react';
import { ButtonIcon } from '../button';

import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <ButtonIcon>
        <TimerIcon />
      </ButtonIcon>
      <ButtonIcon>
        <Table2Icon />
      </ButtonIcon>
      <ButtonIcon>
        <GaugeCircle />
      </ButtonIcon>
      <ButtonIcon>
        <BugIcon />
      </ButtonIcon>
    </div>
  );
}
