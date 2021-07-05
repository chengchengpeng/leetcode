// 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。
// s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
var isSubtree = function(root, subRoot) {
  let arrRoot = deep(root), arrSubRoot = deep(subRoot), next = getNextArr(arrSubRoot), n = 0, m= 0
  function deep(root) {
    let arr = [], res = [], item = null
    arr.push(root)
    while(arr.length){
      item  = arr.pop()
      if (item === "rNull" || item === "lNull"){
        res.push(item)
      }else{
        res.push(item.val)
        if (item.right) {
          arr.push(item.right)
        }else{
          arr.push("rNull")
        }
        if (item.left) {
          arr.push(item.left)
        }else{
          arr.push("lNull")
        }
      }
    }
   return res
  }
  function getNextArr(arrSubRoot) {
    let next  = new Array(arrSubRoot.length).fill(0), i = 0, j =1
    while (j<arrSubRoot.length) {
      if (arrSubRoot[i] === arrSubRoot[j]) {
        next[j] = i+1
        i++
        j++
      }else{
        if (i === 0) {
          next[j] = 0
          j++
        }else {
          i = next[i-1]
        }
      }
    }
    return next
  }
  while (n<arrRoot.length){
    if (arrRoot[n] === arrSubRoot[m]) {
      if (m === arrSubRoot.length-1) return true
      n++
      m++
    }else {
      if (m === 0) {
        n++
      }else {
        m = next[m-1]
      }
    }
  }
  return false
};
