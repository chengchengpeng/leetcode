// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

var createListNode = function (value, key) {
  this.value = value
  this.key = key
  this.pre = null
  this.next = null
}

var LRUCache = function(capacity) {
  this.head = new createListNode(0, 0)
  this.tail = new createListNode(0, 0)
  this.head.next = this.tail
  this.tail.pre = this.head
  this.map = new Map()
  this.size = 0
  this.capacity = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1
  this.move(this.map.get(key))
  return this.map.get(key).value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    if (this.map.get(key).value !== value) this.map.get(key).value = value
    this.move(this.map.get(key))
  }else{
    let node = new createListNode(value, key)
    this.map.set(key, node)
    if (this.size = this.capacity) {
      let removed = this.reomveTail()
      this.map.delete(removed.key)
    }else {
      this.size++
    }
    this.addHead(node)
  }
};
LRUCache.prototype.addHead = function(node) {
  node.next = this.head.next
  node.pre = this.head
  this.head.next.pre = node
  this.head.next = node

}
LRUCache.prototype.reomveTail = function() {
  let node = this.tail.pre
  this.remove(node)
  return node
}

LRUCache.prototype.remove = function(node) {
  node.pre.next = node.next
  node.next.pre = node.pre
}
LRUCache.prototype.move = function(node) {
  this.remove(node)
  this.addHead(node)
}
