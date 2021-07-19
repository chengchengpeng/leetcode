// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

var isValidBST = function(root) {
  let pre = "start"
  return preDef(root)
  function preDef(root) {
    if (!root) return true
     let left = preDef(root.left)
    if (pre === 'start' || pre<root.val){
      pre = root.val
    }else {
      return false
    }
     let right = preDef(root.right)
     return left && right
  }
};
