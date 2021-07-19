// 颠倒给定的 32 位无符号整数的二进制位。


var reverseBits = function(n) {
  let res = 0;
  for (let i = 0; i< 32; i++) {
    res <<=1
    res += n & 1
    n>>=1
  }
  return res
};

let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i);
        n >>>= 1;
    }
    return rev >>> 0;
