// 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
var hasAlternatingBits = function(n) {
  let res = n.toString(2), pre = '-1'
  for (let i = 0; i<res.length; i++) {
    if (pre === res.charAt(i)) return false
    pre = res.charAt(i)
  }
  return true
};
