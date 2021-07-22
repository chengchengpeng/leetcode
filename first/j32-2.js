// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，
// 第三行再按照从左到右的顺序打印，其他行以此类推。
var levelOrder = function(root) {
  let res = []
  if (!root) return res
  let arr = [root], lenght,tem,flag = true
  while (arr.length){
    lenght = arr.length
    tem = []
    while(lenght--) {
      let item = arr.splice(0, 1)[0]
      tem.push(item.val)
      if (item.left) arr.push(item.left)
      if (item.right) arr.push(item.right)
    }
    if (!flag){
      tem.reverse()
    }
    flag = !flag
    res.push(tem)
  }
  return res
};
