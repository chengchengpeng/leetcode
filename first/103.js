// 给定一个二叉树，返回其节点值的锯齿形层序遍历。
// （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let arr = [root],res = [], length, tem, item, flag = true
    while (arr.length) {
      length = arr.length
      tem = JSON.parse(JSON.stringify(arr.map(a=>{
        return a.val
      })))
      if (!flag) {
        tem.reverse()
      }
      res.push(tem)
      flag = !flag
      while (length--) {
        item = arr.splice(0, 1)[0]
        if (item.left) {
          arr.push(item.left)
        }
        if (item.right) {
          arr.push(item.right)
        }
      }
    }
    return res
};
