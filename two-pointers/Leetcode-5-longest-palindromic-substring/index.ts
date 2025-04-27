function getLongestOddPalindrome(s: string, idx: number) {
  let ans = s[idx];
  let left = idx - 1;
  let right = idx + 1;
  while (left >= 0 && right <= s.length - 1) {
    if (s[left] === s[right]) {
      ans = s[left] + ans + s[right];
      left--;
      right++;
    } else {
      break;
    }
  }
  return ans;
}

function getLongestEvenPalindrome(s: string, idx: number) {
  let ans = "";
  let left = idx;
  let right = idx + 1;
  while (left >= 0 && right <= s.length - 1) {
    if (s[left] === s[right]) {
      ans = s[left] + ans + s[right];
      left--;
      right++;
    } else {
      break;
    }
  }
  return ans;
}

function longestPalindrome(s: string): string {
  let result = "";
  for (let i = 0; i <= s.length - 1; i++) {
    let ans = getLongestOddPalindrome(s, i);
    if (ans.length > result.length) {
      result = ans;
    }
    ans = getLongestEvenPalindrome(s, i);
    if (ans.length > result.length) {
      result = ans;
    }
  }
  return result;
}
