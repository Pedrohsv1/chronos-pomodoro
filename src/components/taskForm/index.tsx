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
import { formatSecondsToMinutes } from '../../utils/formatsecondstominutes.ts';

export function TaskForm() {
  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const taskInput = useRef<HTMLInputElement>(null);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskInput.current === null) return;

    const taskName = taskInput.current.value.trim();

    if (!taskName) {
      // Alerta Tostfy
      alert('Digite o nome da tarefa!');
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

    const secondsRemaining = newTask.duration * 60;

    setState(prev => {
      return {
        ...prev,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prev.tasks, newTask],
      };
    });
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
        />
      </div>

      <div className={styles.formRow}>
        <p>
          Vamos <strong>concentrar</strong> em nossos objetivos!
        </p>
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
          >
            <PlayCircle />
          </Button>
        ) : (
          <Button
            aria-label='Interromper tarefa'
            title='Interromper tarefa'
            type='button'
            variant='destructive'
          >
            <StopCircle />
          </Button>
        )}
      </div>
    </form>
  );
}
