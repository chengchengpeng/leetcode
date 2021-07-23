// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

var findContinuousSequence = function(target) {
  let i = 1, j = 2, arr = [], tem = [1,2], sum = 3
  while(i<target){
    if (sum > target) {
      sum = sum - i
      tem.splice(0,1)
      i++
    }else if (sum < target) {
      j++
      sum = sum + j
      tem.push(j)
    }else{
      arr.push(JSON.parse(JSON.stringify(tem)))
      sum = sum - i
      tem.splice(0,1)
      i++
    }
  }
  return arr
};
console.log(findContinuousSequence(15));
