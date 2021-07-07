// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1
var firstUniqChar = function(s) {
  let map  = new Map()
  for (let i = 0; i<s.length; i++) {
    if (map.has(s.charAt(i))){
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
    }else {
      map.set(s.charAt(i), 1)
    }
  }
  for (let i=0; i<s.length; i++) {
    if (map.get(s.charAt(i)) === 1) {
      return i
    }
  }
  return -1
};
