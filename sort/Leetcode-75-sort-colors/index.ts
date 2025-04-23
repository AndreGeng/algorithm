const sortColors = (nums: number[]): void => {
  if (!nums || nums.length <= 0) {
    return;
  }
  let left = 0;
  let right = nums.length - 1;
  let curr = 0;
  while (curr <= right) {
    const item = nums[curr];
    if (item === 0) {
      [nums[left], nums[curr]] = [nums[curr], nums[left]];
      left++;
    } else if (item === 2) {
      [nums[right], nums[curr]] = [nums[curr], nums[right]];
      right--;
    }
    curr++;
  }
};

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
nums = [2, 0, 1];
sortColors(nums);
console.log(nums);
