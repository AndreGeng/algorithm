function findTarget(nums: number[]) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  return nums[left];
}

console.log(findTarget([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(findTarget([3, 3, 7, 7, 10, 11, 11]));
