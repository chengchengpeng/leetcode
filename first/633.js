/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-17 13:43:28
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-17 14:47:09
 */
// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
const test = (c) =>{
  let i=0, sqrtSum = Math.floor(Math.sqrt(c))
  while (i !==sqrtSum) {
    if(i*i + sqrtSum * sqrtSum > c){
      sqrtSum--
    }else if(i*i + sqrtSum * sqrtSum < c){
      i++
    }else{
      return true
    }
  }
  if(i*i*2 === c) return true
  return false
}
console.log(test(23523523523523));


