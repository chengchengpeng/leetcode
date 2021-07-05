// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
var levelOrder = function(root) {
    let arr = [root],res = [], length, tem, item
    while (arr.length) {
      length = arr.length
      tem = []
      while (length--) {
        item = arr.splice(0, 1)[0]
        tem.push(item.val)
        if (item.left) {
          arr.push(item.left)
        }
        if (item.right) {
          arr.push(item.right)
        }
      }
      res.push(tem)
    }
    return res
};
