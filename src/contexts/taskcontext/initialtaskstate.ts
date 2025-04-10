import { TaskStateModel } from '../../models/taskState.model';

export const initialTaskState: TaskStateModel = {
  tasks: [],

  formattedSecondsRemaining: '25:00',
  secondsRemaining: 0,
  activeTask: null,

  currentCycle: 0,
  config: {
    worktime: 25,
    breaktime: 5,
    longbreaktime: 15,
  },
};
