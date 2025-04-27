function longestPalindrome(s: string): number {
  if (!s) {
    return 0;
  }
  let arr = s.split("");
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    map[item] = (map[item] || 0) + 1;
  }
  let ans = 0;
  let charArr = Object.keys(map);
  let hasOdd = false;
  for (let i = 0; i < charArr.length; i++) {
    if (map[charArr[i]] % 2 === 0) {
      ans += map[charArr[i]];
    } else {
      ans = ans + map[charArr[i]] - 1;
      hasOdd = true;
    }
  }
  if (hasOdd) {
    ans++;
  }
  return ans;
}
