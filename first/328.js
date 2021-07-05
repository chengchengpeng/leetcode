// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

var oddEvenList = function(head) {
  let curr = head, next = head.next,newCurr =next.next , newCurr = null, evenHead = next, res = head
  if (newCurr) {
    newNext = newCurr.next
  }
  while (newCurr || newNext){
    curr.next = newCurr
    curr = newCurr
    if (newNext) {
      next.next = newNext
      newCurr = newNext.next
      if (newNext.next) {
        newNext = newCurr.next
      }else {
        ewNext = null
      }
    }else {
      newCurr = null
      newNext = null
   }
  }
  curr.next = evenHead
  return res
};
