// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
// 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
var reverseLeftWords = function(s, n) {
  let res = "",i = n
  while(true) {
    if (res.length === s.length) return res
    res = res + s.charAt(i)
    if (i === s.length-1) {
      i = 0
    }else{
      i++
    }
  }
};
