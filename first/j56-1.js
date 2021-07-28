var singleNumbers = function(nums) {
  res = 0
  debugger
  for (let item of nums) {
    res = res ^ item
  }
  let target = 1,a = 0, b = 0
  while(true){
    if(res & 1 === 1) break
    target <<=1
    res>>>=1
  }
  console.log(target);
  for (let i = 0; i<nums.length; i++) {
    if ((nums[i] & target) === target){
      a ^= nums[i]
    }else {
      b ^= nums[i]
    }
  }
  console.log(a, b);
  return [a, b]
};
singleNumbers([1,2,5,2])
