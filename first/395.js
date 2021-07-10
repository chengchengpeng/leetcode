// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串，
//  要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

var longestSubstring = function(s, k) {
  function dfs(s) {
    res = 0
    let map = new Map()
    for (let i =0; i< s.length; i++) {
      if(map.has(s.charAt(i))){
        map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
      }else {
        map.set(s.charAt(i), 1)
      }
    }
    let splitCode = -1
    for (let [key, value] of map){
      if (value < k){
        splitCode = key
        break
      }
    }
    if (splitCode === -1) return s.length
    for (let item of s.split(splitCode)){
      if (item) {
        cc = res
        res = Math.max(dfs(item), res)
        if (res === 3){
          debugger
        }
        // if (splitCode === "c") console.log(res, cc);
      }
    }
    return res
  }
  return dfs(s)
};
// longestSubstring("bbaaacbd", 3)
console.log(longestSubstring("bbaaacbd", 3))
