// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

// 返回同样按升序排列的结果链表。

var deleteDuplicates = function(head) {
  let set = new Set(),tem = head,pre = null
  while (tem) {
    if (set.has(tem)) {
      pre.next = tem.next
      tem = pre.next
    }else{
      pre = tem
      tem = tem.next
    }
  }
};
