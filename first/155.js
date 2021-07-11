// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。\

var MinStack = function() {
  this.arr1 = []
  this.arr2 = []
};

/**
 * @param {number} val
 * @return {void}{}
 */
MinStack.prototype.push = function(val) {
  this.arr1.push(val)
  if (this.arr1.length) {
    if (this.arr2[this.arr2.length-1] > val) {
      this.arr2.push(val)
    }else {
      this.arr2.push(this.arr2[this.arr2.length-1])
    }
  }else{
    this.arr2.push(val)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr2.pop()
  return this.arr1.pop()
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
MinStack.prototype.getMin = function() {
  return this.arr2[this.arr2.length-1]
};
