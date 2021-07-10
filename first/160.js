// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

// 图示两个链表在节点 c1 开始相交：


var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
    let a = headA, b = headB
    while (a !== b) {
      a = a===null ? headB : a.next
      b = b===null ? headA : b.next
    }
    return a
};
