// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

var addTwoNumbers = function(l1, l2) {
let node = null, curr = 0, val, preVal = 0, head = null
while (l1 || l2) {
  if (l1 && l2) {
    curr = l1.val+l2.val + preVal
    l1 = l1.next
    l2 = l2.next
  }else if (l1){
    curr = l1.val + preVal
    l1 = l1.next
  }else {
    curr = l2.val + preVal
    l2 = l2.next
  }
  if (curr <10) {
    val = curr
    preVal = 0
  }else {
    val = curr-10
    preVal = 1
  }
  if (node) {
    node.next = new ListNode(val)
    node = node.next
  }else {
    head = node = new ListNode(val)
  }
}
return head
};
