// 输入一个字符串，打印出该字符串中字符的所有排列。

var permutation = function(s) {
  let str = '', res = [], set = new Set()
  debugger
  function dfs(k, index) {
    set.add(index)
    str = str + k
    if (str.length == s.length) {
      res.push(str)
      return
    }
    for (let i = 0; i<s.length; i++) {
      if (!set.has(i)) {
        dfs(s.charAt(i), i)
        set.delete(i)
        str = str.slice(0,str.length-1)
      }
    }
  }
  dfs("", -1)
  return [...new Set(res)]
};
let s = 'aabc'
console.log(permutation(s));
