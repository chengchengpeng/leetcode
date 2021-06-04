// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
let base= 'aaavaabbcdeeeffefffffefe'
let a = base.split('')
let len = 0
let item = a[0]
let temArr = []
a.forEach(i=>{
  if(i === item){
    item = i
    temArr.push(i)
    len = temArr.length > len ? temArr.length : len
  }else{
    item = i
    temArr = [i]
  }
})
console.log(len);
