import type { TaskStateModel } from '../models/taskState.model';

let instance: TimerWorkManager | null = null;

export class TimerWorkManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance(): TimerWorkManager {
    if (!instance) {
      instance = new TimerWorkManager();
    }
    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(callback: (event: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }

  terminate() {
    if (this.worker) {
      this.worker.terminate();
      instance = null;
    }
  }
}
