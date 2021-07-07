// 数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
// 定一个正整数 n ，输出外观数列的第 n 项。

var countAndSay = function (n) {
  let pre = [1], preval = '', count = 0, tem = []
  for (let i = 2; i <= n; i++) {
    count = 1
    preval = pre[0]
    tem = []
    for (let k = 1; k < pre.length; k++) {
      if (pre[k] === preval) {
        count++
      } else {
        tem.push(count)
        tem.push(preval)
        count = 1
        preval = pre[k]
      }
    }
    tem.push(count)
    tem.push(preval)
    pre = tem
  }
  return pre.join("")
};
console.log(countAndSay(6));
