// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
var printNumbers = function(n) {
  let arr = [],res = []
  function dfs(toatl){
    if (toatl > n) {
      if (arr.length){
        res.push(arr.join(""))
      }
      return
    }
    for (let i = 0; i<10; i++) {
      if (( arr.length!==0) || i !== 0){
        arr.push(String(i))
      }
      dfs(toatl+1)
      arr.pop()
    }
  }
  dfs(1)
  return res
};
console.log(printNumbers(2));
