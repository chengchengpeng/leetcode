// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。
var MinStack = function() {
  this.arr1 = []
  this.arr2 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr1.push(x)
  if (!this.arr2.length || x < this.arr2[this.arr2.length-1]){
    this.arr2.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let item = this.arr1.pop()
  if (item === this.arr2[this.arr2.length-1]) this.arr2.pop()
  return item
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr1[this.arr1.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.arr2[this.arr2.length-1]
};
