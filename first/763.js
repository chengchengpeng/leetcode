/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-13 13:47:49
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-13 16:50:30
 */
// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。
let S = "ababcbacadefegdehijhklij"
let obj = {}, arr = [], resArr=[]
for (let i = 0; i<S.length; i++) {
  if (obj[S.charAt(i)]){
    obj[S.charAt(i)][1] = i
  }else{
    obj[S.charAt(i)] = [i, i]
  }
}
arr = Object.values(obj)
arr.sort((a,b) =>{return a[0]-b[0]})

let flag = arr[0][1], start = 0
for (let i = 1;i<arr.length;i++){
  if(arr[i][0]<flag){
    if(arr[i][1] > flag){
      flag = arr[i][1]
    }
  }else{
      resArr.push(flag-start+1)
      start = arr[i][0]
      flag = arr[i][1]
  }
}
resArr.push(flag-start+1)
console.log(resArr);

