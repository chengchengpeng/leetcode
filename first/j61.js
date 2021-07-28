// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，
// J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
var isStraight = function(nums) {
  let total = 0,val = null
  nums.sort((a,b) => {return a-b})
  for (let i = 0; i<nums.length; i++) {
    if (nums[i] === 0) {
      total++
    }else{
      if (!val) {
        val = nums[i]
      }else{
        if ((nums[i] !== val+1)){
          if (total==0) return false
          total--
        } else{
          val = nums[i]
        }
      }
    }
  }
  return true
};

 
