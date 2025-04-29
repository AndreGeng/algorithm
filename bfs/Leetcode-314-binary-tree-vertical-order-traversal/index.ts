// 定义二叉树节点类
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function verticalOrder(root: TreeNode) {
  if (!root) return [];

  const columnTable: Record<string, number[]> = {};
  const queue: [TreeNode | null, number][] = [];
  let minColumn = 0,
    maxColumn = 0;

  // 将根节点及其列索引 0 加入队列
  queue.push([root, 0]);

  while (queue.length > 0) {
    const [node, column] = queue.shift()!;

    if (node) {
      if (!columnTable[column]) {
        columnTable[column] = [];
      }
      columnTable[column].push(node.val);

      // 更新最小和最大列索引
      minColumn = Math.min(minColumn, column);
      maxColumn = Math.max(maxColumn, column);

      // 将左子节点及其列索引（当前列索引减 1）加入队列
      queue.push([node.left, column - 1]);
      // 将右子节点及其列索引（当前列索引加 1）加入队列
      queue.push([node.right, column + 1]);
    }
  }

  let result: number[][] = [];
  for (let i = minColumn; i <= maxColumn; i++) {
    if (columnTable[i]) {
      result.push(columnTable[i]);
    }
  }

  return result;
}

const node = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(verticalOrder(node));
