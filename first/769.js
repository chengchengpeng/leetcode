// 数组arr是[0, 1, ..., arr.length - 1]的一种排列，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

// 我们最多能将数组分成多少块？

var maxChunksToSorted = function(arr) {
  let res = 0, max = 0
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    let flag = true
    for (let j = i+1; j<arr.length;j++) {
      if (arr[j] <= max) {
        flag = false
        break
      }
    }
    if (flag) res++
  }
  return res
};

arr = [4,3,2,1,0]

console.log(maxChunksToSorted(arr));
