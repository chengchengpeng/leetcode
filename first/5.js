// 给你一个字符串 s，找到 s 中最长的回文子串。
let base = 'ababbac'
let a = base.split('')
let len = 0
a.forEach((item, indexFa)=>{
  a.slice(indexFa).forEach((item, index)=>{
    let plus = a.slice(indexFa).slice(0,index+1)
    console.log(plus);
    let plusString = plus.join()
    let minus = plus.reverse()
    let minusString = minus.join()
    if(plusString === minusString){
      len  = minus.length > len ? minus.length : len
    }
  })
})
console.log(len);
