/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-11 17:42:10
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-12 10:06:52
 */
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

const g = [10,9,8,7], s = [5,6,7,8]


let sum = 0, i=0, j = 0
const sortFunc = (a,b)=>{return a-b}
g.sort(sortFunc)
s.sort(sortFunc)
console.log(g,s);
while (j<s.length) {
  console.log(i,j);
  if(s[j]>=g[i]){
    i++
    sum++
  }
  j++
}

console.log(sum);
