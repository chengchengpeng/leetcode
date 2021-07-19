// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

var isPalindrome = function(s) {
  s = s.toLowerCase()
  debugger
let i = 0, j = s.length-1
  while (j> i){
    if (s.charAt(i) !== s.charAt(j)) return false
    i++
    j--
    while(!/\w/.test(s.charAt(i)) || s.charAt(i) === "_"){
      i++
      if (i>j) break
    }
    while(!/\w/.test(s.charAt(j)) || s.charAt(j) === "_"){
      j--
      if (i>j) break
    }
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
