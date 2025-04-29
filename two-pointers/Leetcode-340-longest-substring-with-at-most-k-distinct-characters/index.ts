// 滑动窗口 + 双指针
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  let left = 0;
  let right = 0;
  let map = {};
  let ans = 0;
  while (left < s.length && right < s.length) {
    const rightItem = s[right];
    const leftItem = s[left];
    map[rightItem] = (map[rightItem] || 0) + 1;
    if (Object.keys(map).length > k) {
      left++;
      map[leftItem] = map[leftItem] - 1;
      if (map[leftItem] <= 0) {
        delete map[leftItem];
      }
    } else {
      ans = Math.max(ans, right - left + 1);
      right++;
    }
  }
  return ans;
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
console.log(lengthOfLongestSubstringKDistinct("aa", 1));
