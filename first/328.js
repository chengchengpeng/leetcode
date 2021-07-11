// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

var oddEvenList = function(head) {
  if (!head) return head

  let odd = oddHead = head.next, oven  = head
  while (oven.next && oven.next.next) {
    oven.next = oven.next.next
    odd.next = oven.next.next
    oven = oven.next
    odd = odd.next
  }
  oven.next = oddHead
  return head
};
