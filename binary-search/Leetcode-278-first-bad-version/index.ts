/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = (left + right) >> 1;
      const isBad = isBadVersion(mid);
      if (isBad) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
