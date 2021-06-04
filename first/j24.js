/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-10 13:55:56
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-10 14:53:08
 */

let head = [1,2,3,4,5,6,8,9]

var reverseList = function(head) {
  let pre = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = pre

    pre = curr
    curr = next
  }

};
console.log(reverseList(head));




var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};
console.log(reverseList(head));
