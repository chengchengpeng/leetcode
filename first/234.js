// 请判断一个链表是否为回文链表。

var isPalindrome = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let i = 0, j = arr.length-1
  while (i<j) {
    if (arr[i] !== arr[j]) return false
    i++
    j++
  }
  return true
};

