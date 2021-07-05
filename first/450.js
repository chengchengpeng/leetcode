// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
// 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用

var deleteNode = function(root, key) {
  let left = null,res = root, right = null, changeNode = null, par = null
  while (root) {
    if (root.val>key){
      root = root.left
    }else if (root.val<key) {
      root = root.right
    }else {
      left = root.left
      right = root.right
      if (!left && !right) root = null
      if (right) {
        par = root
        changeNode = root.right
        while (changeNode.left) {
          par = changeNode
          changeNode = changeNode.left
        }
        root.val = changeNode.val
        par.left = null
      }
      if (left && !right) {
        par = root
        changeNode = root.left
        while (changeNode.right) {
          par = changeNode
          changeNode = changeNode.right
        }
        root.val = changeNode.val
        par.right = null
      }
    }
  }
  return res
};

