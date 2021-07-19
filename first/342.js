var isPowerOfFour = function(n) {
  let flag = false, total = 0
  for (let i = 0; i<31; i++) {
    if (!flag && n ^ 1 === 0) return false
    if (flag && n ^ 1 === 0) {
      total++
    }
  }
  return total === 1
};
