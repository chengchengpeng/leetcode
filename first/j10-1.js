var fib = function(n) {
  if (n === 0 )return 0
  let one = 0, two = 1
  for (let i = 2; i<=n; i++) {
    let sum = one + two
    one = two
    two = sum
  }
  return tw %1000000007
};
console.log(fib(81));
