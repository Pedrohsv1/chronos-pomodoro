import { Play } from 'lucide-react';
import { Button } from '../button';
import { Cycles } from '../cycles';
import { DefaultInput } from '../input';

import styles from './styles.module.css';

export function TaskForm() {
  return (
    <form action='' className={styles.form}>
      <div className={styles.formRow}>
        <p>
          Vamos <strong>concentrar</strong> em nossos objetivos!
        </p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultInput
          id='taskpomodoro'
          labelText='Atividade'
          placeholder='O que você vai fazer?'
        />
      </div>

      <div className={styles.formRow}>
        <Button type='button' variant='primary'>
          <Play />
        </Button>
      </div>
    </form>
  );
}
