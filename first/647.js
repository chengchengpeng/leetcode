var countSubstrings = function(s) {
  let count = 0
  for (let i=0; i<s.length; i++) {
    count++
    let left = i-1, right = i+1
    while ((left>=0 || rigth < s.length) && s.charAt(left) === s.charAt(right)){
      count++
      left--
      right++
    }
    if (i+1<s.length && s.charAt(i) === s.charAt(i+1)) {
      count++
      left = i-1
      right = i+2
      while((left>=0 || rigth < s.length) && s.charAt(left) === s.charAt(right)) {
        count++
        left--
        right++
      }
    }
  }
  return count
};
