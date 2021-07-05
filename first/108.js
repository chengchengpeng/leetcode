// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。


var sortedArrayToBST = function(nums) {
  if (!nums.lengh) return null
  function getTree(start, end) {
    if (end < start) return null
    let mid = Math.floor((end+start)/2)
    let root = new TreeNode(nums[mid])
    root.left = getTree(start, mid-1)
    root.right = getTree(mid+1, end)
    return root
  }
  return getTree(0, nums.lengh)
};
