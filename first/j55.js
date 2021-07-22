// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）
// 形成树的一条路径，最长路径的长度为树的深度。
var maxDepth = function(root) {
  let arr = [root], total = 0, length
  while(arr.length){
    total++
    length = arr.length
    while(length--) {
      let item = arr.splice(0,1)[0]
      if (item.left) arr.push(item.left)
      if (item.right) arr.push(item.right)
    }
  }
  return total
};
