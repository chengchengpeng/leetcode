// 给定一个二叉树的前序遍历和中序遍历结果，尝试复原这个树。已知树里不存在重复值的节 点。

var buildTree = function(preorder, inorder) {
  let map = new Map()
  for (let i = 0; i<inorder.length; i++) {
    map.set(inorder[i], i)
  }
  function mybuildTree(preorderLeft, preorderRigt, inorderLeft, inorderRight){
    if (preorderRigt<preorderLeft) return null
    let root = treeNode(preorder[preorderLeft])
    let inorderRootIndex = map.get(preorder[preorderLeft])
    root.left = mybuildTree(preorderLeft+1, preorderLeft + inorderRootIndex-inorderLeft, inorderLeft, inorderRootIndex-1)
    root.right = mybuildTree(preorderLeft + inorderRootIndex-inorderLeft+1, preorderRigt, inorderRootIndex+1, inorderRight)
    return root
  }
  n = preorder.length
  return mybuildTree(0,n-1,0,n-1)
};
