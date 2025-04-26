function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (matrix[mid][0] > target) {
      right = mid - 1;
    } else {
      if (left === mid) {
        break;
      }
      left = mid;
    }
  }
  const row = left;
  left = 0;
  right = matrix[row].length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (matrix[row][mid] === target) {
      return true;
    }
    if (matrix[row][mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
