```
class TaskQueue {
  constructor(count = 2) {}

  runTask(task) {}

  //其它....
}


const taskQueue = new TaskQueue();

//TODO：添加任务
//......

```

## Example

```
const sleep = async (t = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}
const queue = new TaskQueue();
queue.runTask(async () => {
    console.log('task 1 start');
    await sleep(1000);
    return 1;
}).then((val) => {
    console.log('task 1 complete:', val);
});
queue.runTask(async () => {
    console.log('task 2 start');
    await sleep(1000);
    return 2;
}).then((val) => {
    console.log('task 2 complete:', val);
});
queue.runTask(async () => {
    console.log('task 3 start');
    await sleep(1000);
    return 3;
}).then((val) => {
    console.log('task 3 complete:', val);
});

```
