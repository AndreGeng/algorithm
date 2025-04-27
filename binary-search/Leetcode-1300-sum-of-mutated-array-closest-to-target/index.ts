function findBestValue(arr: number[], target: number): number {
  arr.sort((a, b) => a - b);
  let left = Math.floor(target / arr.length);
  let right = arr[arr.length - 1];
  let diff = Infinity;
  let ans = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        sum += mid;
      } else {
        sum += arr[i];
      }
    }
    if (sum - target > 0) {
      right = mid - 1;
    } else if (sum - target < 0) {
      left = mid + 1;
    } else {
      return mid;
    }
    if (Math.abs(sum - target) < diff) {
      diff = Math.abs(sum - target);
      ans = mid;
    } else if (
      typeof ans !== "undefined" &&
      Math.abs(sum - target) === diff &&
      mid < ans
    ) {
      ans = mid;
    }
  }
  return ans;
}
