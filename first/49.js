// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
var groupAnagrams = function(strs) {
 let map = new Map(), itemarr = '', arr = []
 for (let item of strs) {
  itemarr = item.split("").sort()
  if (map.has(itemarr)) {
    map.get(itemarr).push(item)
  }else {
    map.set(itemarr, [item])
  }
 }
 for (let item of map.values()) {
   arr.push(item)
 }
 return arr
};
