// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

var levelOrder = function(root) {
  let res = []
  if (!root) return res
  let arr = [root], lenght,tem
  while (arr.length){
    lenght = arr.length
    tem = []
    while(lenght--) {
      let item = arr.splice(0, 1)[0]
      tem.push(item.val)
      if (item.left) arr.push(item.left)
      if (item.right) arr.push(item.right)
    }
    res.push(tem)
  }
  return res
};
