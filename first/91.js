var numDecodings = function(s) {
  let mat = new Array(s.length+1).fill(1)
 if (s.charAt(0) === '0')  {
     return 0
 }
 debugger
 for (let i = 2; i<=s.length; i++) {
     if (s.charAt(i-1) === '0') {
        if (s.charAt(i) === '0' || s.charAt(i-2) > 2) return 0
        mat[i-1] = mat[i-2]
        mat[i] = mat[i-1]
   }
  if (s.charAt(i-2) !== '0' && s.charAt(i-1) !== '0' && s.charAt(i-2) * 10 + (+s.charAt(i-1)) <= 26) {
    mat[i] = mat[i-2] + mat[i-1]
  }else {
    mat[i] = mat[i-1]
  }
 }
 return mat[s.length]
};
console.log(numDecodings("10"));
