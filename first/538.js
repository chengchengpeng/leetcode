// 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），
// 使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

var convertBST = function(root) {
  let sum = 0
  getsum(root)
  function getsum(root) { // 算传入节点的总和
    if (!root) return
    getsum(root.right)
    sum = sum + root.val
    root.val = sum
    getsum(root.left)
  }
    return root
};
