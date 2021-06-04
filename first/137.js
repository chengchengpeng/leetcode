// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
const base = [1,1,1,2,2,2,3,3,4,4,4,5,5,5,6,6,6,7]
let compare = []
let resList = []
base.forEach(i=>{
  if(compare.indexOf(i) !== -1){
    resList.push(i)
  }
  compare.push(i)
})
base.forEach(i => {
  if(resList.indexOf(i) === -1){
    console.log(i);
  }
});
