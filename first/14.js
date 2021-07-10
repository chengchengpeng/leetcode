// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

var longestCommonPrefix = function(strs) {
  let i = 0 , s = ''
  while (true) {
    s = strs[0].charAt(i)
    if (!s) return item.slice(0, i)
    for (let item of strs) {
      if (item.charAt(i) !== s){
        return item.slice(0, i)
      }
    }
    i++
  }
};
