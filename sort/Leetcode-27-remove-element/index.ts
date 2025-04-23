const removeElement = (nums: number[], val: number) => {
  let left = 0;
  let right = 0;
  while (left < nums.length && right < nums.length) {
    const rightItem = nums[right];
    if (rightItem !== val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return left;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
