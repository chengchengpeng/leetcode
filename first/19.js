// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

var removeNthFromEnd = function(head, n) {

  let map  = new Map(), total = 0, root = head
  while (head) {
    map.set(total, head)
    head = head.next
  }
  let item = map.get(total-n)
  item.next = item.next.next
  return root
};
