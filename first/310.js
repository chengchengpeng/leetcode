/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-06-02 16:45:37
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-06-04 09:47:31
 */
// 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。

// 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。

// 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。

// 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。

// 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。


// 在这样一个图中，总是能找出一或多条最长的路径，如果是一条， 其 中点就是要求的点，如果是多条， 那么他们相交的那个点，
// 就是题要求的点， 那么还是只需要考虑一条。 对于没在这条最长路径上的点。 他也在一条路径上， 且这条路径必定相交于最长路径
// 上，其点到相交点的距离必定短于相交点到最长路径两端点的距离， 在同步消除叶子节点的递归下， 因为最长路径，不在这条最长
// 路径上的点会优先消除完， 最终这条线。 最最终，剩下中间一个点， 或者两个点，为所求结果
var findMinHeightTrees = function(n, edges) {
  if (n ===1) {
    return [0]
  }
  let mapArr = new Map(), result = [], queue = []
  for (let [a,b] of edges) {
    if (mapArr.has(a)) {
      mapArr.get(a).add(b)
    }else {
      let tem = new Set()
      tem.add(b)
      mapArr.set(a, tem)
    }
    if (mapArr.has(b)) {
      mapArr.get(b).add(a)
    }else {
      let tem = new Set()
      tem.add(a)
      mapArr.set(b, tem)
    }
  }
  debugger
  for (let [key, value] of mapArr) {
    if (value.size === 1) {
      queue.push(key)
    }
  }
  while (queue.length) {
    result  = JSON.parse(JSON.stringify(queue)), length = queue.length
    if (queue.length === 1) break
    if (queue.length === 2 && [...mapArr.get(queue[0])][0] === queue[1]) break
    while (length--) {
      let nums = queue.shift()
      let next = [...mapArr.get(nums)][0]
      let nextTo = mapArr.get(next)
      nextTo.delete(nums)
      if (nextTo.size === 1){
        queue.push(next)
      }
    }
  }
  return result
};

n = 7, edges = [[0,1],[1,2],[1,3],[2,4],[3,5],[4,6]]

console.log(findMinHeightTrees(n, edges));
