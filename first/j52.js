// 输入两个链表，找出它们的第一个公共节点。

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let rootA = headA, rootB = headB
  while(headA !== headB){
    headA = headA === null ? rootB : headA.next
    headB = headB === null ? rootA : headB.next
  }
  return headA
};
