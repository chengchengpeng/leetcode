// 现在你总共有 n 门课需要选，记为 0 到 n-1。

// 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]

// 给定课程总量以及它们的先决条件，返回你为了学完所有课程所安排的学习顺序。

// 可能会有多个正确的顺序，你只要返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

var findOrder = function(numCourses, prerequisites) {
  // 0 未访问
  // 1 正字进行访问
  // 2 已完成
  let map = new Map(), arr = [], mapStatus = new Map(), tem = null, hasCircle = false
  for (let item of prerequisites) {
    if (map.has(item[0])) {
      map.get(item[0]).push(item[1])
    }else {
      map.set(item[0], [item[1]])
    }
  }
  debugger
  for (let i = 0; i<numCourses; i++) {
    if (!mapStatus.has(i)) {
      deep(i)
      if (hasCircle) return []
    }
  }
  function deep(root) {
    mapStatus.set(root, 1)
    if(map.has(root)) {
      for (item of map.get(root)) {
        if (!mapStatus.has(item)) {
          deep(item)
          if (hasCircle) {
            return
          }
        }else if (mapStatus.get(item) === 1) {
          hasCircle = true
          return
        }
      }
    }
    mapStatus.set(root, 2)
    arr.push(root)
  }
  return arr
};

let numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]

console.log(findOrder(numCourses, prerequisites));
