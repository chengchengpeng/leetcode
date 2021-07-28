var getLeastNumbers = function(arr, k) {
  function quickSort(i,j) {
    if (i>=j) return
    let first = i, last = j, key = arr[i]
    while (first<last){
      while(first < last && arr[last] >= key){
        last--
      }
      arr[first] = arr[last]
      while(first < last && arr[first] <= key){
        first++
      }
      arr[first] = arr[last]
    }
    arr[first] = key
    quickSort(i, first-1)
    quickSort(first+1, j)
  }
  quickSort(0, arr.length-1)
  return arr.slice(0, k)
};
