// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

var mergeTwoLists = function(l1, l2) {
  let head = node = new ListNode()
  while(l1 & l2){
    if (l1.val > l2.val) {
      node.next = l2
      l2 = l2.next
    }else{
      node.next = l1
      l1.next
    }
    node = node.next
  }
  node.next = l1 || l2
  return head.next
};
