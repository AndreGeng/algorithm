class Solution {
  w: number[];
  sumList: number[] = [];
  constructor(w: number[]) {
    this.w = w;
    this.buildSumList();
  }
  buildSumList() {
    for (let i = 0; i < this.w.length; i++) {
      if (i === 0) {
        this.sumList[0] = this.w[i];
        continue;
      }
      this.sumList[i] = this.sumList[i - 1] + this.w[i];
    }
  }
  pickIndex(): number {
    let left = 0;
    let right = this.w.length - 1;
    const random = Math.floor(
      Math.random() * (this.sumList[this.sumList.length - 1] + 1),
    );
    while (left < right) {
      console.log("left, right:", left, right, random);
      const mid = (left + right) >> 1;
      if (this.sumList[mid] > random) {
        right = mid;
      } else if (this.sumList[mid] < random) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
    return right;
  }
}
