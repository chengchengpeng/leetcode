// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
var generateParenthesis = function (n) {
  let resStr = '', left = right = n, arr = []
  sitCode(left, right)
  function sitCode(left, right) {
    if (left === 0 && right === 0) {
      arr.push(resStr)
    }
    if (left > 0) {
      resStr = resStr + "("
      sitCode(left - 1, right)
      resStr = resStr.slice(0, resStr.length - 1)
    }
    if (left !== right) {
      resStr = resStr + ")"
      sitCode(left, right - 1)
      resStr = resStr.slice(0, resStr.length - 1)
    }
  }
  return arr
};
console.log(generateParenthesis(3));
