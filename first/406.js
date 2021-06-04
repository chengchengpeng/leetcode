/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-13 17:31:04
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-14 13:51:32
 */
// 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。

// 请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。
let people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]

// const Quick_Sort = (arr, start, end)=>{
//   if(start >= end) return
//   let tem = arr[start], i = start, j = end
//   while (i !== j){
//     while (arr[j][0] >= tem[0] && j > i) {
//       if(arr[j][0] === tem[0] && arr[j][1] > tem[1]){
//         break
//       }
//       j--
//     }
//     while (arr[i] <= tem && j > i) {
//       if(arr[i][0] === tem[0] && arr[i][1] < tem[1]){
//         break
//       }
//       i++
//     }
//     if(j > i){
//       let t = arr[j]
//       arr[j] = arr[i]
//       arr[i]  = t
//     }
//   }
//   arr[start] = arr[i]
//   arr[i] = tem
//   Quick_Sort(arr, start, i-1)
//   Quick_Sort(arr, i+1, end)
// }
let peopleLength = people.length
people.sort(sortFunc)
let resArr = new Array(peopleLength).fill(false)
let k  = 0
for (let i=0; i<peopleLength; i++) {
   k  = 0
  for (let j =0; j<peopleLength; j++) {
    if(!resArr[j]) {
      if(k === people[i][1]){
        resArr[j] = people[i]
        break
      }
      k++
    }
  }
}

const sortFunc = (a,b)=>{
  if (a[0]>b[0]) return 1
  if (a[0]<b[0]) return -1
  if (a[0]===b[0]){
    if(a[1]>b[1]) return -1
    if(a[1]<b[1]) return 1
  }
}
console.log(people);
