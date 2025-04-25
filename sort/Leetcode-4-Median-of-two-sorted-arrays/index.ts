function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  // 1/2 1, 2/2 2
  const halfLen = (m + n) >> 1;

  let i = m >> 1;
  let j = halfLen - i;
  while (i >= 0 && i <= m && j >= 0 && j <= n) {
    if (i > 0 && j < n && nums1[i - 1] > nums2[j]) {
      i--;
      j = halfLen - i;
    } else if (i < m && j > 0 && nums1[i] < nums2[j - 1]) {
      i++;
      j = halfLen - i;
    } else {
      let minRight: number;
      if (i === m) {
        minRight = nums2[j];
      } else if (j === n) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }
      if ((m + n) % 2 === 1) {
        return minRight;
      }
      let maxLeft: number;
      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      return (minRight + maxLeft) / 2;
    }
  }
  return -1;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
