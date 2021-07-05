// 给出二叉树的根节点 root，树上每个节点都有一个不同的值。

// 如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。

// 返回森林中的每棵树。你可以按任意顺序组织答案。

var delNodes = function (root, to_delete) {
  let set = new Set(to_delete), res = []
  deep(root, root.left, "left")
  deep(root, root.right, "right")
  if (set.has(root.val)) {
    if (root.left) {
      if (!set.has(root.left.val)) res.push(root.left)
      root.left = null
    }
    if (root.right) {
      if (!set.has(root.right.val)) res.push(root.right)
      root.right = null
    }
  } else {
    res.push(root)
  }
  function deep(parNode, root, type) {
    if (root === null) return
    let left = root.left, right = root.right
    if (set.has(root.val)) {
      if (type === "left") {
        parNode.left = null
      } else {
        parNode.right = null
      }
      if (left) {
        if (!set.has(left.val)) res.push(left)
        root.left = null
      }
      if (right) {
        if (!set.has(right.val)) res.push(right)
        root.right = null
      }
    }
    deep(root, left, "left")
    deep(root, right, "right")
  }
  return res
};
