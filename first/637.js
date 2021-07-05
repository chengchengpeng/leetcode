// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

var averageOfLevels = function(root) {
  function MyQunen() {
    this.inner = []
    this.out = []
  }
  MyQunen.prototype.push = function(value) {
    this.inner.push(value)
  }
  MyQunen.prototype.pop = function() {
    if (!this.out.length) {
      while(this.inner.length) {
        this.out.push(this.inner.pop())
      }
    }
    return this.out.pop()
  }
  MyQunen.prototype.size = function() {
    return this.out.length + this.inner.length
  }
  let qunen = new MyQunen(), res = [], count = 0, sum = 0
  qunen.push(root)
  while (qunen.size()) {
    length = qunen.size()
    count = length
    while(length--){
      item = qunen.pop()
      sum = sum + item.val
      if (item.left) {
        qunen.push(item.left)
      }
      if (item.right) {
        qunen.push(item.right)
      }
    }
    res.push(sum/count)
  }
  return res

};
