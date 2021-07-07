// 给定一个Excel表格中的列名称，返回其相应的列序号。
var titleToNumber = function(columnTitle) {
  let curr = 0, sum = 0
  for (let i = columnTitle.length-1; i>= 0; i--) {
    sum = sum + (columnTitle.charAt(i).charCodeAt()-"A".charCodeAt() + 1) * 26**curr
    curr++
  }
  return sum
};
