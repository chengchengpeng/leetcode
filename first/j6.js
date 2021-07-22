// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
var reversePrint = function(head) {
  let arr = []
  while(head){
    arr.push(head)
    head = head.next
  }
  return arr.reverse()
};
