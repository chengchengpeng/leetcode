// 给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。

var kthSmallest = function(matrix, k) {
  let n = matrix.length-1, m = matrix[0].length, mid = 0
  function check(mid) {
    let i =   n, j = 0, sum = 0
    while (i> 0 && j < m) {
      if (matrix[i][j] <= mid) {
        sum = sum + i + 1
        j++
      }else {
        i--
      }
    }
    return sum >= k
  }
  debugger
  let left = matrix[0][0], right = matrix[n][m-1]
  while (right > left) {
    mid = Math.floor((left + right)/2)
    if (check(mid)) {
      right = mid
    }else {
      left = mid + 1
    }
  }
  return right
};
let a = [[1,2],[1,3]]
kthSmallest(a, 3)
