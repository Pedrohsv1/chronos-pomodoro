import { ToastContentProps } from 'react-toastify';

import { Button } from '../button';

import styles from './styles.module.css';

export function Dialog({
  closeToast,
  data,
}: ToastContentProps<{ title: string; description: string }>) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.buttonsContainer}>
          <Button
            onClick={() => closeToast(false)}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          >
            No, keep it
          </Button>

          <Button
            onClick={() => closeToast(true)}
            variant='destructive'
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
          >
            Yes, Delete it!
          </Button>
        </div>
      </div>
    </>
  );
}
