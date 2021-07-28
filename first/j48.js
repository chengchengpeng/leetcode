var lengthOfLongestSubstring = function(s) {
  let preStr = '', max = 0
  for (let i = 0; i<s.length; i++) {
    let index = preStr.indexOf(s.charAt(i))
    preStr = preStr.slice(index +1) + s.charAt(i)
    max = Math.max(max, preStr.length)
  }
  return max
};
