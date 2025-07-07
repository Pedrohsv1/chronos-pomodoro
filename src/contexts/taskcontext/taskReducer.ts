import { TaskStateModel } from '../../models/taskState.model';
import { formatSecondsToMinutes } from '../../utils/formatsecondstominutes';
import { getNextCycle } from '../../utils/getnextcycle';
import { initialTaskState } from './initialtaskstate';
import { TaskActionModel, TaskActionTypes } from './taskAction';

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);

      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COUNT_DOWN: {
      const { secondsRemaining } = action.payload;
      const formattedSecondsRemaining =
        formatSecondsToMinutes(secondsRemaining);
      return {
        ...state,
        secondsRemaining,
        formattedSecondsRemaining,
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_TASKS: {
      return { ...initialTaskState };
    }
    case TaskActionTypes.CHANGE_CONFIG: {
      const { worktime, shortbreaktime, longbreaktime } = action.payload;
      return {
        ...state,
        config: {
          ...state.config,
          worktime,
          shortbreaktime,
          longbreaktime,
        },
      };
    }
  }
  return state;
}
