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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) {
    return "null";
  }
  let ans = "";
  const queue = [root];
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) {
      ans += "null,";
      continue;
    }
    ans += item.val + ",";
    queue.push(item.left || null);
    queue.push(item.right || null);
  }
  return ans.slice(0, ans.length - 1);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  console.log("deserialize:", data);
  const arr = data.split(",");
  if (arr.length === 1 && arr[0] === "null") {
    return null;
  }
  const node = new TreeNode(Number(arr[0]));
  const queue = [node];
  let queueIndex = 0;
  let i = 0;
  while (queueIndex < queue.length) {
    const item = queue[queueIndex];
    i++;
    if (arr[i] !== "null") {
      const leftNode = new TreeNode(Number(arr[i]));
      item.left = leftNode;
      queue.push(leftNode);
    }

    i++;
    if (arr[i] !== "null") {
      const rightNode = new TreeNode(Number(arr[i]));
      item.right = rightNode;
      queue.push(rightNode);
    }
    queueIndex++;
  }
  return node;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
