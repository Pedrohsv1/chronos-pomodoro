import { Play } from 'lucide-react';
import { Button } from '../button';
import { Cycles } from '../cycles';
import { DefaultInput } from '../input';
import { useState, useRef } from 'react'

import { TaskModel } from '../../models/task.model.ts'

import styles from './styles.module.css';

export function TaskForm() {
  const taskInput = useRef<HTMLInputElement>(null)

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(taskInput.current.value)

    if(taskInput.current === null) return;

    const taskName = taskInput.current.value.trim()

    if(!taskName) {
      // Alerta Tostfy
      alert('Digite o nome da tarefa!')
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'worktime'
    }
  }

  return (
    <form action='' onSubmit={handleCreateTask} className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id='taskpomodoro'
          labelText='Atividade'
          placeholder='O que você vai fazer?'

          ref={taskInput}
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
        <Button type='submit' variant='primary'>
          <Play />
        </Button>
      </div>
    </form>
  );
}
