import { TaskModel } from './task.model';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;

  currentCycle: number;

  config: {
    worktime: number;
    shortbreaktime: number;
    longbreaktime: number;
  };
};
