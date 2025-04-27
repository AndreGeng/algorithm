function cutting(r: number[], k: number) {
  let left = 1;
  let right = Math.max(...r);
  let ans = 0;
  while (left <= right) {
    console.log("left, right:", left, right);
    const mid = (left + right) >> 1;
    let count = 0;
    for (let i = 0; i < r.length; i++) {
      count += Math.floor(r[i] / mid);
    }
    if (count >= k) {
      left = mid + 1;
      ans = Math.max(ans, mid);
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

console.log(cutting([9, 7, 5], 3));
console.log(cutting([9, 7, 5], 4));
console.log(cutting([9, 7, 5], 22));
