// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

var generate = function(numRows) {
  let arr = [1], res = [[1]], curr = []
  for (let i = 2; i<=numRows; i++) {
    for (j = 0; j<i; j++) {
      if (j ===0) {
        curr[0] = arr[0]
      }else if (j === i-1) {
        curr[j] = arr[j-1]
      }else{
        curr[j] = arr[j-1] + arr[j]
      }
    }
    res.push(JSON.parse(JSON.stringify(curr)))
    arr = JSON.parse(JSON.stringify(curr))
  }
  return res
};
