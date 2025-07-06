import { PlayCircle, StopCircle } from 'lucide-react';
import { Button } from '../button';
import { Cycles } from '../cycles';
import { DefaultInput } from '../input';
import { useRef } from 'react';

import { TaskModel } from '../../models/task.model.ts';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/taskcontext/index.tsx';
import { getNextCycle } from '../../utils/getnextcycle.ts';
import { getNextCycleType } from '../../utils/getnextcycletype.ts';
import { TaskActionTypes } from '../../contexts/taskcontext/taskAction.ts';
import { Tips } from '../tips/index.tsx';
import { showToast } from '../../adapters/showToast.ts';

export function TaskForm() {
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const taskInput = useRef<HTMLInputElement>(null);
  const defaultValue = state.tasks[state.tasks.length - 1]?.name || '';

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskInput.current === null) return;

    const taskName = taskInput.current.value.trim();

    if (!taskName) {
      showToast.dismiss();

      // Alerta Tostfy
      showToast.warn('Digite o nome da tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    showToast.dismiss();

    showToast.success(`Task "${taskName}" iniciada com sucesso!`);
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });

    showToast.warn('Tarefa interrompida!');
  }

  return (
    <form action='' onSubmit={handleCreateTask} className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id='taskpomodoro'
          labelText='Atividade'
          placeholder='O que você vai fazer?'
          ref={taskInput}
          disabled={!!state.activeTask}
          defaultValue={defaultValue}
          autoFocus
        />
      </div>

      <div className={styles.formRow}>
        <Tips />
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        {!state.activeTask ? (
          <Button
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            variant='primary'
            key='submit'
          >
            <PlayCircle />
          </Button>
        ) : (
          <Button
            aria-label='Interromper tarefa'
            title='Interromper tarefa'
            type='button'
            variant='destructive'
            onClick={handleInterruptTask}
            key='button'
          >
            <StopCircle />
          </Button>
        )}
      </div>
    </form>
  );
}
