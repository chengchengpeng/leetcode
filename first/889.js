// 返回与给定的前序和后序遍历匹配的任何二叉树。

//  pre 和 post 遍历中的值是不同的正整数。
var constructFromPrePost = function(pre, post) {
  let map = new Map()
  for (let i=0; i<post.length; i++) {
    map.set(post[i], i)
  }
  function getTree(pres, posts, len) {
      if (len === 0) return null
    let root = new TreeNode(pre[pres])
    if (len ===1) return root
    let currleftlen = map.get(pre[pres+1])-posts+1
    root.left = getTree(pres+1, posts, currleftlen)
    root.right = getTree(pres + currleftlen +1, posts+currleftlen, len-currleftlen-1)
    return root
  }
  return getTree(0, 0, post.length)
};
