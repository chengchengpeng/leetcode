// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

let t = 'fasdfjafafadiajdsadjaskdj'
let res = ''
let result = ''
t.split('').forEach((item, i) => {
  for (let j = i; j < t.split('').length; j++) {
    if (res.indexOf(j) === -1) {
      res = res + t.split('')[j]
    } else {
      result = res
      res = ''
      break
    }
  }
})
console.log(result)
