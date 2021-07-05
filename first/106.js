// 根据一棵树的中序遍历与后序遍历构造二叉树。

var buildTree = function(inorder, postorder) {
  let map = new Map()
  for (let i = 0; i<inorder.length; i++) {
    map.set(inorder[i], i)
  }
  function mybuildTree(inorderStart, postorderStart, len) {
    if (len === 0) return null
    let root = new TreeNode(postorder[postorderStart+len-1])
    if (len ===1) return root
    let leftLen = map.get(postorder[postorderStart+len-1]) - inorderStart
    root.left = mybuildTree(inorderStart, postorderStart, leftLen)
    root.right = mybuildTree(map.get(postorder[postorderStart+len-1]) + 1, postorderStart+leftLen, len-leftLen-1)
    return root
  }
  return mybuildTree(0, 0, inorder.length)
};
