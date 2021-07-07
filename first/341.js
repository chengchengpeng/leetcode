// 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。

// 列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。
var NestedIterator = function(nestedList) {
    this.arr = []
    this.index = 0
    for (let item of nestedList){
      if (Array.isArray(item)) {
        for (let son of item){
          this.arr.push(son)
        }
      }else {
        this.arr.push(item)
      }
    }
  }
/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.index <= this.arr.length-1
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  if (this.hasNext){
    item  = this.arr[this.index]
    this.index++
    return item
  }
};

let test = new NestedIterator([[1,1],2,[1,1]])
while (test.hasNext()) {
  console.log(test.next());
}
