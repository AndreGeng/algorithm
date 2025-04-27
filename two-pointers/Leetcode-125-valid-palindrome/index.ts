function isPalindrome(s: string): boolean {
  let str = s;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (!/[a-zA-Z\d]/.test(str[left])) {
      left++;
      continue;
    }
    if (!/[a-zA-Z\d]/.test(str[right])) {
      right--;
      continue;
    }
    if (str[left].toLocaleLowerCase() !== str[right].toLocaleLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
