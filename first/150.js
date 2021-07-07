// 根据 逆波兰表示法，求表达式的值。

// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

var evalRPN = function(tokens) {
  let arr = [], right , left, res
  for (let item of tokens){
    if (isNumber(item)) {
      arr.push(item)
    }else {
      right = parseInt(arr.pop())
      left = parseInt(arr.pop())
      if (item  === "+"){
        res = left + right
      }
      if (item === "/"){
        res = Math.floor( left / right)
      }
      if (item === "-") {
        res = left - right
      }
      if (item === "*") {
        res = left * right
      }
      arr.push(res)
    }
  }
  function isNumber(num) {
    return !(num === "+" || num === "-" || num === "*" ||num === "/")
  }
  return arr.pop()
};
tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(tokens));
