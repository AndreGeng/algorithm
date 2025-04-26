function squareRoot(n: number) {
  let left = 1;
  let right = n;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (mid * mid > n) {
      right = mid - 1;
    } else if (mid * mid <= n) {
      if (left === mid) {
        break;
      }
      left = mid;
    }
  }
  return left;
}
