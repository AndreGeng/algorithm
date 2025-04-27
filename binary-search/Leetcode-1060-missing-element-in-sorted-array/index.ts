function findKthMissingElement(nums: number[], k: number) {
  const missingNumArr = Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    missingNumArr[i] = nums[i] - (nums[0] + i);
  }
  let left = 0;
  let right = missingNumArr.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (k > missingNumArr[mid]) {
      if (left === mid) {
        break;
      }
      left = mid;
    } else if (k < missingNumArr[mid]) {
      right = mid - 1;
    } else {
      return nums[mid] - 1;
    }
  }
  return nums[left] + (k - missingNumArr[left]);
}

console.log(findKthMissingElement([4, 7, 9, 10], 1));
console.log(findKthMissingElement([4, 7, 9, 10], 3));
