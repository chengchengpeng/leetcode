// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
// 整数除法仅保留整数部分。

var calculate = function(s) {
  let arr = [], res= 0
  for (let i=0;i<s.length; i++) {
    if (s.charAt(i) === ' ') continue
    let tem = [],item = 0, length = 0, chart = s.charAt(i)
    if (chart === "/" || chart === "*") {
      while(!isNaN(s.charAt(i+1)) && i+1<s.length){
        if (s.charAt(i+1) !== ' ') {
          tem.push(s.charAt(i+1))
        }
        i++
      }
      length = tem.length-1
      while (tem.length) {
        item = item + tem.pop() * 10** (length-tem.length)
      }
      if (chart === "*") {
        arr.push(Math.floor(arr.pop() * item))
      }else{
        debugger
        arr.push(Math.floor(arr.pop() / item))
      }
    }else if(chart === "+" || chart === "-"){
      arr.push(s.charAt(i))
    }else{
      while(!isNaN(s.charAt(i)) && i<s.length){
        if (s.charAt(i) !== ' '){
          tem.push(s.charAt(i))
        }
        i++
      }
      i--
      length = tem.length-1
      while (tem.length) {
        let a = tem.pop()
        item = item + a * 10 ** (length-tem.length)
      }
      arr.push(item)
    }
  }
  res = arr[0]
  for (let i = 1; i<arr.length; i++) {
    if (arr[i] === "+") {
      res = res + arr[i+1]
      i++
    }else {
      res = res - arr[i+1]
      i++
    }
  }
  return res
};

s = "1*2-3/4+5*6-7*8+9/10"
console.log(calculate(s));
