function replaceCount(map: Record<string, number>) {
  let max = 0;
  let keyList = Object.keys(map);
  let key: string;
  for (let i = 0; i < keyList.length; i++) {
    if (map[keyList[i]] > max) {
      max = map[keyList[i]];
      key = keyList[i];
    }
  }
  return keyList.reduce((acc, k) => {
    if (k === key) {
      return acc;
    }
    acc += map[k];
    return acc;
  }, 0);
}
function characterReplacement(s: string, k: number): number {
  let left = 0;
  let right = 0;
  let map = {};
  let ans = 0;
  while (left < s.length && right < s.length) {
    console.log("left, right", left, right);
    const leftItem = s[left];
    const rightItem = s[right];
    map[rightItem] = (map[rightItem] || 0) + 1;
    if (Object.keys(map).length > 1 && replaceCount(map) > k) {
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
