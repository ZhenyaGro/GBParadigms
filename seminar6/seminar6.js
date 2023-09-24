class Stopwatch {
  constructor() {
    this.startTime = null;
    this.pauseTime = null;
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;

      this.intervalId = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.printTime(this.elapsedTime);
      }, 10);
    }
  }

  pause() {
    if (this.isRunning) {
      this.pauseTime = Date.now();
      this.isRunning = false;

      clearInterval(this.intervalId);
    }
  }

  resume() {
    if (!this.isRunning) {
      const pausedTime = Date.now() - this.pauseTime;
      this.startTime += pausedTime;
      this.isRunning = true;

      this.intervalId = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.printTime(this.elapsedTime);
      }, 10);
    }
  }

  stop() {
    this.startTime = null;
    this.pauseTime = null;
    this.elapsedTime = 0;
    this.isRunning = false;

    clearInterval(this.intervalId);
    this.printTime(0);
  }

  printTime(time) {
    const milliseconds = String(time % 1000).padStart(3, '0');
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((time / 1000) / 60)).padStart(2, '0');

    console.log(`${minutes}: ${seconds}.${milliseconds}`);
  }
}

const stopwatch = new Stopwatch();

stopwatch.start();

setTimeout(() => {
  stopwatch.pause(); // Пауза через 3 секунды
}, 3000);

setTimeout(() => {
  stopwatch.resume(); // Воспроизведение через 5 секунд
}, 5000);

setTimeout(() => {
  stopwatch.stop(); // Остановка через 7 секунд
}, 7000);
