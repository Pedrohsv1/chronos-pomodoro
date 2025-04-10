import { useContext } from 'react';
import { TaskContext } from './taskcontext';

export function useTaskContext() {
  return useContext(TaskContext);
}
