const largestNum = (nums: number[]) => {
  const sortedNums = nums.sort((a, b) => {
    const aStr = String(a);
    const bStr = String(b);
    let preNum = -1;
    for (let i = 0; i < Math.max(aStr.length, bStr.length); i++) {
      const aChar = aStr[i];
      const bChar = bStr[i];
      let numA = Number(aChar);
      let numB = Number(bChar);
      if (!aChar) {
        numA = preNum;
      }
      if (!bChar) {
        numB = preNum;
      }
      if (numA > numB) {
        return -1;
      }
      if (numA < numB) {
        return 1;
      }
      preNum = numA;
    }
    return -1;
  });
  return sortedNums.join("");
};

console.log(largestNum([10, 2]));
console.log(largestNum([3, 30, 34, 5, 9]));
