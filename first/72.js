// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

var minDistance = function(word1, word2) {
  let mat = []
  for (let i = 0; i<=word1.length; i++) {
    mat.push(new Array(word2.length+1))
  }
  for (let i = 0; i<= word1.length; i++) {
    for (let j = 0; j<=word2.length; j++) {
      if (i ===0) {
        mat[i][j] = j
      }else if (j === 0) {
        mat[i][j] = i
      } else {
        if (word1.charAt(i-1) === word2.charAt(j-1)) {
          mat[i][j] = Math.min(mat[i][j-1], mat[i-1][j-1]-1, mat[i-1][j]) + 1
        }else {
          mat[i][j] = Math.min(mat[i][j-1], mat[i-1][j-1], mat[i-1][j]) + 1
        }
      }
    }
  }
  return mat[word1.length][word2.length]
};

word1 = "intention", word2 = "execution"

console.log(minDistance(word1, word2));

