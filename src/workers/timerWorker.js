let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) {
    return;
  }

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = new Date(activeTask.startDate + secondsRemaining * 1000);

  console.log(`Timer started for task: ${activeTask.name}, ends at: ${endDate.toLocaleTimeString()}`);

  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
}