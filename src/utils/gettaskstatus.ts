import type { TaskModel } from '../models/task.model';

export function getTaskStatus(
  task: TaskModel,
  activeTask: TaskModel | null,
): string {
  if (task.completeDate) {
    return 'Completed';
  } else if (task.interruptDate) {
    return 'Interrupted';
  } else if (activeTask && activeTask.id === task.id) {
    return 'In Progress';
  } else {
    return 'Abandoned';
  }
}
