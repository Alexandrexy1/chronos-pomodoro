let isRunning = false;

self.onmessage = function(event) {
    if (isRunning) return;

    isRunning = true;

    const state = event.data;
    const { activeTask, secondsRemaining } = state;

    const endDate = activeTask.startDate + secondsRemaining * 1000;

    function tick() {
        const now = Date.now();
        const countDownSecionds = Math.floor(((endDate - now) / 1000) + 1);
        
        self.postMessage(countDownSecionds);

        setTimeout(tick, 1000);
    }

    tick();
}