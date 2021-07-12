// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

var connect = function(root) {
    let arr = [root], pre = null
    while (arr.length) {
      let length = arr.length
      while (length--) {
        let item = arr.splice(0,1)[0]
        if (pre){
          pre.next = item
        }
        if (length === 0) {
          pre = null
        }else{
          pre = item
        }
        arr.push(item.left)
        arr.push(item.right)
      }
    }
    return root
};
