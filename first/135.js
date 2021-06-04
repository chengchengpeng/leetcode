/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-12 10:24:24
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-12 16:00:53
 */
// 一群孩子站成一排，每一个孩子有自己的评分。现在需要给这些孩子发糖果，规则是如果一
// 个孩子的评分比自己身旁的一个孩子要高，那么这个孩子就必须得到比身旁孩子更多的糖果；所
// 有孩子至少要有一个糖果。求解最少需要多少个糖果。
// 输入输出样例
// 输入是一个数组，表示孩子的评分。输出是最少糖果的数量。
let ratings = [1,0,2]
let sum = 0
let ratingsLength = ratings.length
let arr = new Array(ratingsLength).fill(1)

/*
首先从左往右遍历， 如果右边的孩子积分大于左边的，那么糖果数在左边的基础上加一，
这一轮每个孩子手上的糖果数增加否， 全来自和左边的比， 第二轮， 从右往左遍历， 如果左边的积分大于右边的，
那么第一轮的时候 ， 右边孩子的糖果数就没有变，依旧是1， 所以此时左边的的这个应该在有边的基础上加1， 而且这个加一为最优解，
因为他比周围大，此时加一为这个局部的最优解。继续遍历， 以此为准
*/

for (let i = 0; i<ratingsLength-1; i++) {
  if(ratings[i+1]>ratings[i]) {
    arr[i+1] = arr[i]+1
  }
}
for (let i = ratingsLength-1; i>0; i--) {
  if(ratings[i-1]>ratings[i] && arr[i-1] <= arr[i]) {
    arr[i-1] = arr[i]+1
  }
}
sum = arr.reduce((a,b) => {return a+b})
console.log(sum);

