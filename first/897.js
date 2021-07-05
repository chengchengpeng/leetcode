// 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，
// 并且每个节点没有左子节点，只有一个右子节点。

var increasingBST = function (root) {
  let arr = [], head = new TreeNode(-1), res = head
  while (root || arr.length) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    root = arr.pop()
    root.left = null
    head.right = root
    head.left = null
    head = root
    root  = root.right
  }
  return res.right
};
