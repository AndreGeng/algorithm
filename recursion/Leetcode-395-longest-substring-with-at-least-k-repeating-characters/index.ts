function longestSubstring(s: string, k: number): number {
  return longestSubstringUtil(s, k, 0, s.length);
}
function longestSubstringUtil(
  s: string,
  k: number,
  start: number,
  end: number,
): number {
  if (start >= end) {
    return 0;
  }
  const map = {};
  let ans = 0;
  for (let i = start; i < end; i++) {
    const item = s[i];
    map[item] = (map[item] || 0) + 1;
  }
  for (let i = start; i < end; i++) {
    const item = s[i];
    if (map[item] >= k) {
      continue;
    }
    ans = Math.max(
      longestSubstringUtil(s, k, start, i),
      longestSubstringUtil(s, k, i + 1, end),
    );
    return ans;
  }
  return end - start;
}
