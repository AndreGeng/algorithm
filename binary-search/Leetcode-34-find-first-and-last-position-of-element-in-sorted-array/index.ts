function search(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
function searchRange(nums: number[], target: number): number[] {
  const l = search(nums, target);
  const r = search(nums, target + 1);
  return l === r ? [-1, -1] : [l, r - 1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
