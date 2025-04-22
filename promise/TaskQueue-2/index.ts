type Task = () => Promise<unknown>;

interface QueueTask {
  task: Task;
  resolve: (value: unknown) => void;
  reject: () => void;
}

class TaskQueue {
  queue: QueueTask[] = [];
  count = 2;
  runningCount = 0;
  constructor(count = 2) {
    this.count = count;
  }
  runTask(task: Task) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject,
      });
      this.next();
    });
  }
  next() {
    if (this.runningCount >= this.count) {
      return;
    }
    if (this.queue.length > 0) {
      const { task, resolve } = this.queue.shift()!;
      if (!task) {
        return;
      }

      this.runningCount++;
      task().then((val) => {
        this.runningCount--;
        resolve(val);
        this.next();
      });
    }
  }
}

const sleep = async (t = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};
const queue = new TaskQueue();
queue
  .runTask(async () => {
    console.log("task 1 start");
    await sleep(1000);
    return 1;
  })
  .then((val) => {
    console.log("task 1 complete:", val);
  });
queue
  .runTask(async () => {
    console.log("task 2 start");
    await sleep(3000);
    return 2;
  })
  .then((val) => {
    console.log("task 2 complete:", val);
  });
queue
  .runTask(async () => {
    console.log("task 3 start");
    await sleep(1000);
    return 3;
  })
  .then((val) => {
    console.log("task 3 complete:", val);
  });
