// 统计所有小于非负整数 n 的质数的数量。

var countPrimes = function(n) {
  let res = 2, arr = new Array(n).fill(1), k
  for (let i = 2; i<n; i++) {
    if (arr[i] === 1) {
      res++
      k = i
      while (k * i<n) {
        arr[k * i] = 0
        k++
      }
    }
  }
  return res
};
