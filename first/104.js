// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  let arr = [root], count = 0, length, item
  while(arr.length){
    count++
    length = arr.length
    while(length--){
      item = arr.pop()
      if (item.left) {
        arr.push(item.left)
      }
      if (item.right) {
        arr.push(item.right)
      }
    }
  }
  return count
};

