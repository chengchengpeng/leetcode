// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

// 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。
// 新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。
// 复制链表中的指针都不应指向原链表中的节点 。

var copyRandomList = function (head) {
  let newHead = null, node = null, map  = new Map()
  while (head) {
    if (node) {
      if (map.has(head)){
        node.next = map.get(head)
      }else {
        node.next = new ListNode(head.val)
        map.set(head, node.next)
      }
      node = node.next
      if (map.has(head.random)){
        node.random = map.get(head.random)
      }else if(head.random){
        node.random = new ListNode(head.random.val)
        map.set(head.random, node.random)
      }else {
        node.random = null
      }
    } else {
      node = new ListNode(head.val)
      map.set(head, node)
      if (head.random === head) {
        node.random = node
      }else if (head.random){
        node.random  = new ListNode(head.random.val)
        map.set(head.random, node.random)
      }else {
        node.random = null
      }
      newHead = node
    }
    head = head.next
  }
  return newHead
};
