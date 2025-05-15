function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    console.log("left, right", left, right, mid);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
