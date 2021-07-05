// 给定一个二叉树，判断它是否是高度平衡的二叉树。

var isBalanced = function(root) {
  return height(root) >= 0
  function height(root) {
    if (root === null) return 0
    let leftHeigh = height(root.left)
    let rightHeight = height(root.right)
    if (leftHeigh === -1 || rightHeight=== -1 || Math.abs(leftHeigh-rightHeight) >1){
      return -1
    }else {
      return Math.max(leftHeigh, rightHeight)
    }
  }
};
