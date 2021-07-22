// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
var mirrorTree = function(root) {
  if (!root) return null
  let left = mirrorTree(root.left)
  let right = mirrorTree(root.right)
  root.left = right
  root.right  = left
  return root
};
var mirrorTree = function(root) {
  if (!root) return
  tem = root.left
  root.left = root.right
  root.right = root.tem
  mirrorTree(root.left)
  mirrorTree(root.right)
  return root
};
