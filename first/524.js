/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-18 13:37:19
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-18 14:04:21
 */
// 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

let s = "abpcpleae", d = ["ale","applee","monkey","plea"]
function test(s, d) {
  d.sort((a,b)=>{
      return b.length - a.length
  })
  for (item of d) {
    let j = 0
    for (let i = 0; i<s.length; i++) {
      if (s.charAt(i) === item.charAt(j)) {
        if(j === item.length-1) return item
        j++
      }
    }
  }
  return ''
}
console.log(test (s, d));
