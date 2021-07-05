// 给定两个字符串 s 和 t，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
var isIsomorphic = function(s, t) {
  let map = new Map(), temarr = [], set = new Set()
  for (let i = 0; i<s.length; i++) {
    let item
    if (map.has(t.charAt(i))) {
      item = map.get(t.charAt(i))
      if (item !== s.charAt(i)) return false
    }else {
      item = s.charAt(i)
      if (set.has(item)) return false
      set.add(item)
      map.set(t.charAt(i), item)
    }
    temarr.push(item)
  }
  return true
};

s= "egg", t = "bar"
console.log(isIsomorphic(s, t));
