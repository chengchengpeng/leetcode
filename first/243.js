// 请判断一个链表是否为回文链表。

var isPalindrome = function(head) {
  let arr = [], tem = head
  while (tem){
    arr.push(tem)
    tem = tem.next
  }
  let i =0,j=arr.length-1
  while (j>i) {
    if (arr[i] !== arr[j]) return false
  }
  return true
};
