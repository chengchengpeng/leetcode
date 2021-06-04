/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-28 13:23:29
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-31 14:51:34
 */

// 按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord -> s1 -> s2 -> ... -> sk 这样的单词序列，并满足：
// 每对相邻的单词之间仅有单个字母不同。
// 转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList 中的单词。
// sk == endWord
// 给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk] 的形式返回。

var findLadders = function(beginWord, endWord, wordList) {
  let bfsChart = {}, lowerCaseArr = [], queue = [], visited = new Set(), temVisited, path = [], result = []
  for(var i=0;i<26;i++) {
    lowerCaseArr.push(String.fromCharCode((65+i)).toLowerCase())
    }
    queue.push(beginWord)
    visited.add(beginWord)
    bfs()
    path.push(beginWord)
    dfs(beginWord)
  function bfs() {
    while (queue.length !== 0) {
      let length  = queue.length
      temVisited = new Set()
      while (length--) {
        let currentWord = queue.shift()
        let currentWordArr = currentWord.split("")
        for (let i= 0;i<currentWord.length; i++) {
          let temItem = currentWordArr[i]
          for (let j = 0; j<lowerCaseArr.length; j++){
            currentWordArr[i] = lowerCaseArr[j]
            let temWord = currentWordArr.join("")
            if (wordList.includes(temWord) && !visited.has(temWord)){
              temVisited.add(temWord)
              queue.push(temWord)
              if (bfsChart[currentWord]) {
                bfsChart[currentWord].add(temWord)
              }else {
                bfsChart[currentWord] = new Set()
                bfsChart[currentWord].add(temWord)
              }
            }
          }
          currentWordArr[i] = temItem
        }
      }
      visited = new Set([...visited, ...temVisited])
    }
  }
  function dfs(beginWord) {
    if (bfsChart[beginWord]) {
      if (bfsChart[beginWord].has(endWord)) {
        path.push(endWord)
        result.push(path)
        path = JSON.parse(JSON.stringify(path))
        path.pop()
      }
      for (let item of bfsChart[beginWord]) {
        path.push(item)
        dfs(item)
        path.pop()
      }
    }
  }
  return result
};
let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]

console.log(findLadders(beginWord, endWord, wordList));
