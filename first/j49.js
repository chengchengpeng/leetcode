// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

var nthUglyNumber = function(n) {
  let arr = [1], p2 =0, p3 = 0, p5 = 0
  for (let i = 2; i<=n;i++) {
    let sum2 = arr[p2]* 2,sum3 = arr[p3] * 3, sum5 = arr[p5] * 5
    let min = Math.min(sum2, sum3, sum5)
    arr.push(min)
    if (min === sum2) p2 ++
    if (min === sum3) p3 ++
    if (min === sum5) p5 ++
  }
  return arr.pop()
};
