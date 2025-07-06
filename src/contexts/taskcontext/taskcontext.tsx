import { createContext } from 'react';
import { TaskStateModel } from '../../models/taskState.model';
import { initialTaskState } from './initialtaskstate';
import { TaskActionModel } from './taskAction';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue: TaskContextProps = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
