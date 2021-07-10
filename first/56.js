// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
var merge = function(intervals) {
  intervals.sort((a,b) =>{
    return a[0]-b[0]
  })
  let curr = intervals[0], arr = []
  for (let i = 1; i<intervals.length; i++) {
    if (intervals[i][0] <= curr[1] && intervals[i][1] > curr[1]) {
      curr[1] = intervals[i][1]
    }
    if (intervals[i][0] > curr[1]) {
      arr.push(curr)
      curr = intervals[i]
    }
    if (i+1 >= intervals.length) {
      arr.push(curr)
    }
  }
  return arr
};
