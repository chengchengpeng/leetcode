/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-31 19:03:14
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-06-02 11:02:30
 */

// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。

var combinationSum2 = function(candidates, target) {
  let path = [], sum = 0, result = [], temCandidates = new Map(), optonCandidates = []
  candidates.sort((a, b)=> {return a-b})
  for (let item of candidates) {
    if (temCandidates.has(item)) {
      temCandidates.set(item, temCandidates.get(item)+1)
    }else{
      temCandidates.set(item, 1)
    }
  }
  optonCandidates = [...temCandidates]
  debugger
    dfs(0)
    function dfs(k) {
      if (sum === target) {
        result.push(JSON.parse(JSON.stringify(path)))
      }else if (sum < target) {
        for (let i = k; i<optonCandidates.length; i++) {
          for (let j = 1; j<= optonCandidates[i][1]; j++) {
            sum = sum +j*optonCandidates[i][0]
            path = [...new Array(j).fill(optonCandidates[i][0]),...path]
            dfs(i+1)
            sum = sum -j*optonCandidates[i][0]
            path = path.slice(j)
          }
        }
      }
  }
  return result
};
let candidates = [10,1,2,7,6,1,5], target = 8


console.log(combinationSum2(candidates, target));
