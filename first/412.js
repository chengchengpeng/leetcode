// 写一个程序，输出从 1 到 n 数字的字符串表示。

// 1. 如果 n 是3的倍数，输出“Fizz”；

// 2. 如果 n 是5的倍数，输出“Buzz”；

// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

var fizzBuzz = function(n) {
  let arr = []
  for (let i = 1; i<n; i++) {
    let a = Math.floor(i/3) === i/3
    let b = Math.floor(i/5) === i/5
    if (a && b) {
      arr.push('FizzBuzz')
    }else if (a){
      arr.push('Fizz')
    }else if (b) {
      arr.push('Buzz')
    }else {
      arr.push(i.toString())
    }
  }
  return arr
};
