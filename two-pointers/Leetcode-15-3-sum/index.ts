function twoSum(nums: number[], target: number, left: number, right: number) {
  let ans: number[][] = [];
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      ans.push([nums[left], nums[right]]);
      let curr = nums[left];
      while (left < right && nums[left] === curr) {
        left++;
      }
      curr = nums[right];
      while (left < right && nums[right] === curr) {
        right--;
      }
    } else if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return ans;
}
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let ans: number[][] = [];
  let pre = -1;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item === pre) {
      continue;
    }
    const twoSumAns = twoSum(nums, -item, i + 1, nums.length - 1);
    for (const [a, b] of twoSumAns) {
      ans.push([item, a, b]);
    }
    pre = item;
  }
  return ans;
}
