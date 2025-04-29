class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 返回当前root的最大深度
  function depth(root: TreeNode | null) {
    if (!root) {
      return 0;
    }
    return Math.max(depth(root.left), depth(root.right)) + 1;
  }
  if (!root) {
    return 0;
  }
  return depth(root.left) + depth(root.right);
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);

one.left = two;
one.right = three;
two.left = four;
two.right = five;

console.log(diameterOfBinaryTree(one));
