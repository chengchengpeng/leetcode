// 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
var strToInt = function(str) {
  debugger
  let resStr = '',flag = '', res = 0
  for (let i = 0; i<str.length; i++) {
    if (!flag && !resStr && str.charAt(i) === ' ') continue
    if (!flag && !resStr && (str.charAt(i) === '-' || str.charAt(i) === '+')) {
      flag =  str.charAt(i)
      continue
    }
    if (isNaN(str.charAt(i)) || str.charAt(i) === " ") break
    resStr = resStr+ str.charAt(i)
  }
  let lenght = resStr.length
  for (let i = 0; i<lenght; i++) {
    res = res + (resStr.charAt(i).charCodeAt()-"0".charCodeAt()) * (10**(lenght-1-i))
  }
  if (flag === '-'){
    return res > 2 ** 31 ? (0 - 2**31) : 0-res
  }else{
    return res > 2**31-1 ? 2**31-1 :res
  }
};
console.log(strToInt("  -41-93 with words  "));
