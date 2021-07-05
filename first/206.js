//翻转链表

var reverseList = function(head) {
  let pre = null
  curr = head
  while(curr) {
    next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return res
};

