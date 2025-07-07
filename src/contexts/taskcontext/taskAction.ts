import { TaskModel } from '../../models/task.model';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  RESET_TASKS = 'RESET_TASKS',
  CHANGE_CONFIG = 'CHANGE_CONFIG',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: TaskActionTypes.RESET_TASKS;
    }
  | {
      type: TaskActionTypes.CHANGE_CONFIG;
      payload: {
        worktime: number;
        shortbreaktime: number;
        longbreaktime: number;
      };
    };
