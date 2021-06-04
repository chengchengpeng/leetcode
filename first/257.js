/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-31 15:30:16
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-31 15:41:19
 */
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
var binaryTreePaths = function(root) {
  let paths = [], path = []
  path.push(root)
  dfs(root)
  function dfs(root) {
    if (!root.left && !root.right) {
      paths.push(JSON.parse(JSON.stringify(path)))
    }else {
      path.push(root.left)
      dfs(root.left)
      path.pop(root.left)
      path.push(root.right)
      dfs(root.right)
      path.pop(root.right)
    }
  }
};
