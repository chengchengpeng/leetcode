// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

var lengthOfLongestSubstring = function(s) {
  let set = new Set(), i = 0, j = 0, count = 0,res = 0
  while (j<s.length){
    while(!set.has(s.charAt(j)) && j<s.length){
      set.add(s.charAt(j))
      j++
      count++
    }
    res = Math.max(res, count)
    set.delete(s.charAt(i))
    count--
    i++
  }
  return res
};

console.log(lengthOfLongestSubstring(" "))
