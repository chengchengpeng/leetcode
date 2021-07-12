// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，
// 其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
var productExceptSelf = function(nums) {
  let arr = [], total = 1, sum = 0
  debugger
  for (let item of nums) {
    if (item === 0) {
      if (sum === 0){
        total = 0
        break
      }else {
        sum++
      }
    }
    if (item !== 0) {
      total = total * item
    }
  }
  console.log(total);
  for (let item of nums) {
    if (item === 0) {
      arr.push(total)
    } else{
      if (sum ===1) {
        arr.push(0)
      }else{
        arr.push(total/item)
      }
    }
  }
  return arr
  };
 console.log( productExceptSelf([0,0]));

