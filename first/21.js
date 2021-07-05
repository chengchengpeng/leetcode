// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    node = new NodeList(-1)
    while (true) {
      if (l1.val > l2.val) {
        node.next = l1
        l1 = l1.next
      }else {
        node.next = l2
        l2 = l2.next
      }
      node = node.next
      if (!l1) {
        node.next = l1
        break
      } else if(!l2) {
        node.next = l2
        break
      }
    }
};
