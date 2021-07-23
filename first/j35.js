// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
// 还有一个 random 指针指向链表中的任意节点或者 null。


var copyRandomList = function(head) {
  let root = head, copyNode = headcopyNode  = ListNode(), map = new Map()
    while (root) {
      if (map.has(root)) {
        copyNode.next = map.get(root)
      }else{
        copyNode.next = ListNode(root.val)
        map.set(root, copyNode.next)
      }
      if (root.random) {
        if (map.has(root.random)) {
          copyNode.next.random = map.get(root.random)
        }else {
          copyNode.next.random  = ListNode(root.val)
          map.set(root.random, copyNode.next.random)
        }
      }else {
        copyNode.next.random = null
      }
      root = root.next
      copyNode  = copyNode.next
    }
    return headcopyNode.next
};
