import { TaskStateModel } from '../../models/taskState.model';

export const initialTaskState: TaskStateModel = {
  tasks: [],

  formattedSecondsRemaining: '00:00',
  secondsRemaining: 0,
  activeTask: null,

  currentCycle: 0,
  config: {
    worktime: 25,
    shortbreaktime: 5,
    longbreaktime: 15,
  },
};
