import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialtaskstate';
import { TaskContext } from './taskcontext';
import { taskReducer } from './taskReducer';
import { TimerWorkManager } from '../../workers/timerWorkManager';
import { TaskActionTypes } from './taskAction';
import { loadBeep } from '../../utils/loadBeeps';
import type { TaskStateModel } from '../../models/taskState.model';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const jsonState = localStorage.getItem('pomodoroState');
    if (jsonState) {
      const savedState = JSON.parse(jsonState) as TaskStateModel;

      return {
        ...savedState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    }
    return initialTaskState;
  });
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkManager.getInstance();

  worker.onmessage((event: MessageEvent) => {
    if (event.data <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: event.data },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('pomodoroState', JSON.stringify(state));

    document.title = `${state.formattedSecondsRemaining} - Pomodoro Chronos`;

    if (!state.activeTask) {
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && !playBeepRef.current) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
