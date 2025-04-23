type Interval = [number, number];
const mergeIntervals = (intervals: Interval[]) => {
  if (intervals.length <= 0) {
    return intervals;
  }
  const sortedIntervals = intervals.sort((a, b) => {
    const [start] = a;
    const [start2] = b;
    return start - start2;
  });
  let ans: Interval[] = [];
  let curr = sortedIntervals[0];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const [start, end] = curr;
    const [nextStart, nextEnd] = sortedIntervals[i];
    if (end >= nextStart) {
      curr = [start, Math.max(end, nextEnd)];
      continue;
    }
    ans.push([start, end]);
    curr = [nextStart, nextEnd];
  }
  ans.push(curr);
  return ans;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ]),
);
