// 给定一棵二叉搜索树，请找出其中第k大的节点。
var kthLargest = function(root, k) {
  let arr = [], count = 0
while(root || arr.length){
  while(root){
    arr.push(root)
    root = root.right
  }
  root = arr.pop()
  count++
  if (count === k) return root
  root = root.lfet
}
return null
};
