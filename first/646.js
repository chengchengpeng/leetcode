// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

var findLongestChain = function(pairs) {
  pairs.sort((a, b) => {
    return a[0]- b[0]
  })
  debugger
  let mat = new Array(pairs.length)
  mat[0] = 1
  for (let i=1; i<pairs.length; i++) {
    mat[i] = mat[i-1]
    if (pairs[i][0] > pairs[i-1][1]) {
      mat[i] = mat[i] + 1
      continue
    }
    j = i-2
    while(mat[i-1] === mat[j]) {
      if (pairs[i][0] > pairs[j][1]) {
        mat[i] = mat[i-1] + 1
        break
      }
      j--
    }
  }
  console.log(mat);
  return mat[pairs.length-1]
};
let pairs = [[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]

console.log(findLongestChain(pairs));
