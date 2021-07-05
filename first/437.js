// 给定一个二叉树，它的每个结点都存放着一个整数值。

// 找出路径和等于给定数值的路径总数。

// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

var pathSum = function(root, targetSum) {
  let sum = 0, count = 0, map = new Map()
  map.set(0, 1)
  function deep(root) {
    if (root === null) return
    sum = root.val + sum
    if (map.has(sum-targetSum)) {
      count = count + map.get(sum-targetSum)
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    }else {
      map.set(sum, 1)
    }
    deep(root.left)
    deep(root.right)
    map.set(sum, map.get(sum) -1)
    sum = sum- root.val
  }
  return count
};
