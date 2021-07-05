// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let smap = new Map(),tmap = new Map()
  for (let i = 0; i<s.length; i++) {
    if (smap.has(s.charAt(i))) {
      smap.set(s.charAt(i), smap.get(s.charAt(i)) + 1)
    }else {
      smap.set(s.charAt(i),1)
    }
    if (tmap.has(t.charAt(i))) {
      tmap.set(t.charAt(i), tmap.get(t.charAt(i)) + 1)
    }else {
      tmap.set(t.charAt(i),1)
    }
  }
 for (let [key, value] of smap) {
   if (!tmap.has(key) || value !== tmap.get(key)) {
     return false
   }
 }
 return true
};
