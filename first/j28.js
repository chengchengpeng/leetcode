// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

var isSymmetric = function(root) {
  if (!root) return true
  function compare(left, right)  {
    if (!left && !right) return true
    if (!left || !right) return false
    let one = compare(left.left, right.right)
    let two = compare(left.right, right.left)
    return one && two && (left.val === right.val)
  }
  return compare(root.left, root.right)
};

