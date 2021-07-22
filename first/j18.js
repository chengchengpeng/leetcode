// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。
var deleteNode = function(head, val) {
  if (head.val === val) return head.next
  let root = head.next, pre = head
  while (root){
    if (root.val === val) {
      pre.next = root.next
      root.next = null
      break
    }
    pre = root
    root = root.next
  }
  return head
};
