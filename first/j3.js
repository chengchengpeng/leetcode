var findRepeatNumber = function(nums) {
  let set = new Set()
  for (let item of nums) {
    if (set.has(item)) return item
    set.add(item)
  }
};
