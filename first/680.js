/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-17 14:45:00
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-17 15:17:41
 */
// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

const test = (s) =>{
  let sum = s.length-1, i=0, index = 0, sumT, iT

  while (sum-i > 0) {
    if(s.charAt(i) !== s.charAt(sum)) {
      if(index === 0) {
        iT = i
        sumT = sum
        i++
        index++
      }else if(index === 1){
        sum = sumT
        i = iT
        sum--
        index++
      }else{
        return false
      }
    }else{
      sum--
      i++
    }
  }
  return true
}
debugger
console.log(test("bddb"));

