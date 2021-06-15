/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-10 10:23:49
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-10 13:55:33
 */


// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
var wordBreak = function(s, wordDict) {
  let setDict = new Set(wordDict), arr = new Array(s.length).fill(false)

  for (let i = 1; i<= s.length; i++) {
    subWord = s.slice(0, i)
    for (let k = 0; k<i; k++) {
      let next = subWord.slice(k)
      if (k === 0) {
        arr[i-1] = setDict.has(next)
      }else {
        if (setDict.has(next) && arr[k-1]) {
          arr[i-1] = true
          break
        }
      }
    }
  }
};


console.log(flag);
