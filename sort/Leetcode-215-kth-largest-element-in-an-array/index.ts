const adjustHeap = (nums: number[], idx: number) => {
  const n = nums.length;
  const left = idx * 2 + 1;
  const right = idx * 2 + 2;
  if (left < n && nums[left] > nums[idx]) {
    [nums[left], nums[idx]] = [nums[idx], nums[left]];
  }
  if (right < n && nums[right] > nums[idx]) {
    [nums[right], nums[idx]] = [nums[idx], nums[right]];
  }
};
const buildLargestHeap = (nums: number[]) => {
  const n = nums.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    adjustHeap(nums, i);
  }
};
const kthLargestElement = (nums: number[], k: number) => {
  let curr = nums;
  let ans = -1;
  for (let i = 0; i < k; i++) {
    buildLargestHeap(curr);
    ans = curr.shift()!;
  }
  return ans;
};

console.log(kthLargestElement([3, 2, 1, 5, 6, 4], 2));
console.log(kthLargestElement([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
