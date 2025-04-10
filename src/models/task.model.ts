import { TaskStateModel } from './taskState.model';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;

  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;

  type: keyof TaskStateModel['config'];
};
