/**
 * time: O(n^2logn). p.s. slice方法的复杂度为O(n)
 * space: O(n)
 */
function longestRepeatingSubstr(str: string) {
  let left = 0;
  let right = str.length - 1;
  let ans = 0;
  while (left < right) {
    const mid = (left + right) >> 1;
    const map = {};
    let found = false;
    for (let i = 0; i + mid <= str.length; i++) {
      const s = str.slice(i, i + mid);
      if (map[s]) {
        ans = Math.max(ans, s.length);
        found = true;
        break;
      } else {
        map[s] = true;
      }
    }
    if (found) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

console.log(longestRepeatingSubstr("abcd"));
console.log(longestRepeatingSubstr("abbaba"));
console.log(longestRepeatingSubstr("aabcaabdaab"));
