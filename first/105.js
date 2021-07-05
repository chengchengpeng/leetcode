// 给定一个二叉树的前序遍历和中序遍历结果，尝试复原这个树。已知树里不存在重复值的节 点。

var buildTree = function(preorder, inorder) {
  let map = new Map()
  for (let i = 0; i<inorder.length; i++) {
    map.set(inorder[i], i)
  }
  function mybuildTree(start1, start2, len){
    if (len < 1) return null
    let root = new TreeNode(preorder[start1])
    if (len === 1) return root
    let currLen = map.get(preorder[start1] - start2)
    root.left = mybuildTree(start1 + 1, start2, currLen)
    root.right = mybuildTree(start1 + 1 + currLen, preorder[start1] + 1, currLen)
    return root
  }
  return mybuildTree(0,0,preorder.length)
};
