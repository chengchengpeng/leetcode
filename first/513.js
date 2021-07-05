// 给定一个二叉树，在树的最后一行找到最左边的值。

var findBottomLeftValue = function(root) {
  let arr = [root], res = 0, length = 0, item = null
  while (arr.length) {
    length  = arr.length
    res = arr[0].val
    while (length--) {
      item = arr.splice(0,1)[0]
      if (item.left) arr.push(item.left)
      if (item.right) arr.push(item.right)
    }
  }
  return res
};
