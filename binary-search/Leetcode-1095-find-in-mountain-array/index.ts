/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

interface MountainArray {
  get(index: number): number;
  length(): number;
}

let findInMountainArray = function (
  target: number,
  mountainArr: MountainArray,
) {
  let arr = mountainArr;
  let left = 0;
  let right = mountainArr.length() - 1;
  while (left !== right) {
    let mid = Math.floor((left + right) / 2);
    if (arr.get(mid) < arr.get(mid + 1)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (arr[left] === target) {
    return left;
  }
  const peak = left;
  console.log("peak:", peak);
  left = 0;
  right = peak - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log("left, right", left, right, mid, arr);
    if (arr.get(mid) < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  console.log("left:", left);
  if (left !== -1 && arr.get(left) === target) {
    return left;
  }
  left = peak + 1;
  right = arr.length() - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.get(left) === target ? left : -1;
};
