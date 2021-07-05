// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

var Trie = function () {
  this.tree = {}
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let item = this.tree
  for (let i = 0; i < word.length; i++) {
    if (!item[word.charAt(i)]) {
      item[word.charAt(i)] = {
        target: false
      }
    }
    item = item[word.charAt(i)]
    if (i === word.length - 1) {
      item.target = true
    }
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let item = this.tree
  for (let i = 0; i < word.length; i++) {
    if (!item[word.charAt(i)]) return false
    if (i === word.length - 1
      && !item[word.charAt(i)].target) return false
    item = item[word.charAt(i)]
  }
  return true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let item = this.tree
  for (let i = 0; i < prefix.length; i++) {
    if (!item[prefix.charAt(i)]) return false
    item = item[prefix.charAt(i)]
  }
  return true
};

let trie = new Trie();
debugger
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
console.log(trie.search("app"));

