var replaceSpace = function(s) {
  let arr = []
  for (let i = 0;i<s.length; i++) {
    if (s.charAt(i) === " ") {
      arr.push("20%")
    }else{
      arr.push(s.charAt(i))
    }
  }
  return arr.join("")
};
