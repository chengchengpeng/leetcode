// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

var canFinish = function(numCourses, prerequisites) {
  // 0 未检索
  // 1 正在检索
  // 2 检索完成
  let map = new Map(), ohtherMap = new Map(), flag = true
  for (let item of prerequisites){
    if (map.has(item[1])){
      map.get(item[1]).push(item[0])
    }else{
      map.set(item[1], [item[0]])
    }
  }
  for (let item of numCourses) {
    if (!ohtherMap.has(item)) {
      deep(item)
      if (!flag) return flag
    }
  }
  function deep(node) {
    ohtherMap.set(node, 1)
    if (map.has(node)){
      for (let item of map.get(node)){
        if (!ohtherMap.has(item)){
          deep(item)
          if (!flag) return
        } else if (ohtherMap.get(item)=== 1){
            flag = false
            return
        }
      }
    }
    ohtherMap.set(node, 2)
  }
  return flag
};

// 正常拓扑排序，， 在当前节点可以入栈时， 以该节点为条件的节点都已入栈， 所在在该节点之上，
//  的任何一个节点， 都不会受到该节点的影响， 层层递归， 栈的出栈顺序就是所需路径
