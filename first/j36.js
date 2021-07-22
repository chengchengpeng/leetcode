// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，
// 只能调整树中节点指针的指向。


var treeToDoublyList = function(root) {
  let arr = [], pre = null, head = null, end
  while(root || arr.length) {
    while (root){
      arr.push(root)
      root = root.left
    }
    root = arr.pop()
    end = root
    root.left = null
    if (pre) {
      pre.next = root
      root.pre = pre
    }else {
      head = root
    }
    pre = root
    root = root.right
    pre.right = null
  }
  head.pre = end
  end.next = head
  return head
};
