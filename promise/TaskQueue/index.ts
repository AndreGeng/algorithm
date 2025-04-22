type Task = () => Promise<void>;
class TaskQueue {
  queue: Task[] = [];
  count = 1;
  runningCount = 0;
  addTask(task: Task) {
    this.queue.push(task);
  }
  next() {
    if (this.runningCount >= this.count) {
      return;
    }
    if (this.queue.length > 0) {
      const task = this.queue.shift();
      if (!task) {
        return;
      }

      this.runningCount++;
      task().then(() => {
        this.runningCount--;
        this.next();
      });
    }
  }
  start(count = 1) {
    this.count = count;
    for (let i = 0; i < count; i++) {
      this.next();
    }
  }
}

const taskQueue = new TaskQueue();
taskQueue.addTask(async () => {
  console.log("task 1");
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  console.log("task 1 complete");
});
taskQueue.addTask(async () => {
  console.log("task 2");
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  console.log("task 2 complete");
});
taskQueue.addTask(async () => {
  console.log("task 3");
  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
  console.log("task 3 complete");
});

taskQueue.start(2);
