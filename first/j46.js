// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，
// 11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，
// 用来计算一个数字有多少种不同的翻译方法。

var translateNum = function(num) {
  let strNum = String(num), length = strNum.length, total = 0
  function dfs(k) {
    if (k === length-1){
      total++
      return
    }
    dfs(k+1)
    if (k+2 < length && parseInt(strNum.slice(k+1, k+3))<26){
      dfs(k+2)
    }
  }
  dfs(-1)
  return total
};

var translateNum = function(num) {
  let arr = [1, 1],strNum = String(num)
  if (parseInt(strNum.slice(0,2)) <26 ) {
    arr[1] = 2
  }
  if (num.length ===0 ) return 0
  if (num.length ===1 ) return 1
  for (let i = 2; i<strNum.length; i++) {
    let sum = arr[1]
    if (parseInt(strNum.slice(i-1,i+1)) < 26 && strNum.charAt(i-1) !== '0'){
      sum = sum + arr[0]
    }
    arr[0] = arr[1]
    arr[1] = sum
  }
  return arr[1]
}
console.log(translateNum(12258));
