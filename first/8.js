// 将字符串转为合适的整数
let base = '+3323wo4s'
var myAtoi = function(s) {
  sum = 0, flag = false,mys = '', length = 0
  for (let i = 0; i< s.length; i++) {
    if (s.charAt(i)!== ' '){
      if (s.charAt(i) === "-") {
        flag = true
        mys = s.slice(i+1)
      }else if(s.charAt(i) === "+"){
        mys = s.slice(i+1)
      }else{
        mys = s.slice(i)
      }
      break
    }
  }
  for (let i = 0; i<mys.length; i++) {
    if (mys.charAt(i) === " " || isNaN(mys.charAt(i))){
      console.log(mys.charAt(i));
    mys = mys.slice(0, i)
    length = i
    break
    }
    if (i === mys.length-1) length = i+1
  }
  console.log(length);
  for (let i = 0; i<mys.length;i++) {
    sum = sum+ parseInt(mys.charAt(i)) * (10 ** (length-i-1))
  }
  if(flag) {
    return 0-sum < 0-2**31 ? 0-2**31 : 0-sum
  }else{
    return sum >= 2**31 ? 2**31-1 : sum
  }
};
console.log(myAtoi(base));
