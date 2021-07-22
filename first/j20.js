// 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
// 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

var dicesProbability = function(n) {
  let arr = [,1,1,1,1,1,1], tem,sum,all = 6**n
  debugger
  for (let i = 2; i<=n;i++) {
    tem = new Array(i).fill(0)
    for (let k = i; k<=i * 6;k++){
      sum = 0
      for (let j = 1; j<=6; j++) {
        if (k-j > arr.length-1) continue
        sum =  sum + arr[k-j]
        if (k-j===i-1) break
      }
      tem.push(sum)
    }
    arr = tem
  }
  arr = arr.map(a=>{
    return parseFloat((a/all).toFixed(5))
  })
  console.log(all);
  return arr.slice(n)
};
console.log(dicesProbability(2));
