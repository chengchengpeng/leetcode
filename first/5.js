// 给你一个字符串 s，找到 s 中最长的回文子串。
var longestPalindrome = function(s) {
  let res = ''
  debugger
  for (let i = 0; i<s.length; i++) {
    let left = i, right = i
    while (true){
      left--
      right++
      if (!(left >= 0 && right<s.length && s.charAt(left) === s.charAt(right))){
        break
      }
    }
    if (res.length < right-left-1){
      res = s.slice(left+1, right)
    }
    if (s.charAt(i) === s.charAt(i+1)){
      left = i
      right = i+1
      while (true){
        left--
        right++
        if (!(left >= 0 && right<s.length && s.charAt(left) === s.charAt(right))){
          break
        }
      }
      if (res.length < right-left-1){
        res = s.slice(left+1, right)
      }
    }
  }
  return res
};
console.log(longestPalindrome("ccc"));
