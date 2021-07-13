// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。


var reverse = function(x) {
  let str = x.toString()
  let one = str.slice(0,1), res
  if (one === "-"){
    str = str.slice(1)
  }
  res = str.split("").reverse().join("")
  if (one === "-"){
    res = "-" + res
  }
  return res > 2 **31-1 || res< 0-2 ** 31 ? 0 : res
};
console.log(reverse(1234));
