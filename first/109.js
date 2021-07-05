// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

var sortedListToBST = function(head) {
  let root = head, arr = []
  while (root) {
      arr.push(root.val)
      root = root.next
  }
  function getTree(left, right) {
    if (right < left ) return null
    let mid = Math.floor((right-left)/2)
    let root = new TreeNode(arr[mid])
    if (left === right) return root
    root.left = getTree(left, mid-1)
    root.right = getTree(mid+1, right)
    return root
  }
  return getTree(0, arr.length-1)
};
