/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-21 14:55:39
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-22 15:28:43
 */
// 快速排序
function quick_sort(nums, l, r) {
  if (l>= r) {
    return;
    }
    first = l, last = r, key = nums[first];
    while (first < last){
      while(first < last && nums[last] >= key) {
      last--;
      }
      nums[first] = nums[last];
      while (first < last && nums[first] <= key) {
      first++;
      }
      nums[last] = nums[first];
    }
    nums[first] = key;
    quick_sort(nums, l, first-1);
    quick_sort(nums, first+1, r);
}

// 归并排序
function merge_sort(nums) {
  let left, right
  if (nums.length>2) {
     left = nums.slice(0,Math.floor(nums.length/2))
     right  = nums.slice(Math.floor(nums.length/2))
    left = merge_sort(left)
    right = merge_sort(right)
  }else if (nums.length === 1) {
    return nums
  } else {
    if (nums[0]>nums[1]){
      return [nums[1], nums[0]]
    }else {
      return nums
    }
  }
  let i=0, j=0, result = []
  while (i<left.length && j<right.length) {
    if (left[i] < right[j]){
      result.push(left[i])
      i++
    }else {
      result.push(right[j])
      j++
    }
  }
  if (i>=left.length) {
    result = result.concat(right.slice(j))
  }else {
    result = result.concat(left.slice(i))
  }
  return result
}

// 插入排序

function insertion_sort(nums) {
  let i = 1
  while (i < nums.length) {
    j = i
    while (nums[j] < nums[j-1]) {
      let tem = nums[j-1]
      nums[j-1] = nums[j]
      nums[j] = tem
      j--
      if(j<1) break
    }
    i++
  }
}
// 冒泡排序
function bubble_sort(nums) {
  let i = nums.length
  while (i>1) {
    let j = 0
    while (j < i-1) {
      if (nums[j] > nums[j+1]) {
        let tem = nums[j]
        nums[j]= nums[j+1]
        nums[j+1] = tem
      }
      j++
    }
    i--
  }
}

// 选择排序
function selection_sort(nums) {
  for (let i=0; i<nums.length;i++) {
    let mid  = nums[i], tem , k
    for (let j = i; j<nums.length; j++) {
      if (nums[j] < mid) {
        mid = nums[j]
        k = j
      }
    }
    tem = nums[i]
    nums[i] = mid
    nums[k] = tem
  }
}
