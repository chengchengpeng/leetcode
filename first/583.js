// 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符
var minDistance = function(word1, word2) {
  let mat =[]
  for (let i = 0; i<word1.length; i++) {
    mat.push(new Array(word2.length).fill(0))
  }
  for (let i = 0; i< word1.length; i++) {
    for (let j = 0; j<word2.length; j++) {
      if (i === 0) {
        if (word1.charAt(i) === word2.charAt(j)) {
          mat[i][j] = 1
        }else {
          if (j === 0)  {
            mat[i][j] = 0
          }else{
            mat[i][j] = mat[i][j-1]
          }
        }
      } else if (j === 0) {
        if (word1.charAt(i) === word2.charAt(j)) {
          mat[i][j] = 1
        }else {
          mat[i][j] = mat[i-1][j]
        }
      } else {
        if (word1.charAt(i) === word2.charAt(j)) {
          mat[i][j] = mat[i-1][j-1] +1
        } else {
          mat[i][j] = Math.max(mat[i-1][j],mat[i][j-1])
        }
      }
    }
  }
  return word1.length + word2.length-2 * mat[word1.length-1][word2.length-1]
};
