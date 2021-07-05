var diffWaysToCompute = function(expression) {
    if (!isNaN(expression)) return [+expression]
    let res = []
    for (let i = 0; i<expression.length; i++) {
      if (['+', '-', '*'].indexOf(expression.charAt(i)) !== -1) {
        let left = diffWaysToCompute(expression.slice(0, i))
        let right = diffWaysToCompute(expression.slice(i+1))
        for (let n = 0; n<left.length; n++){
          for (let m = 0;m<right.length;m++) {
            if (expression.charAt(i) === '+') {
              res.push(left[n] + right[m])
            } else if (expression.charAt(i) === '-') {
              res.push(left[n] - right[m])
            }else {
              res.push(left[n] * right[m])
            }
          }
        }
      }
    }
    return res
  };
  var diffWaysToCompute2 = function(expression) {
    function getResult(a, symbol, b) {
      let res
      if (symbol === '*') {
        res = a * b
      } else if (symbol === '-') {
        res = a-b
      }else {
        res = a+b
      }
    }
    let mat = new Array(), sum = 0,pre = 0, preto = 0
    for (let i = 1; i<expression.length; i++) {
      if (["+", "-", "*"].indexOf(expression.charAt(i)) !== -1) {
        sum++
        if (sum === 1) {
          mat[0] = [+expression.slice(0,i)]
        } else if (sum=== 2) {
          mat[1] = [getResult(expression.slice(0,pre) , expression.charAt(pre), expression.slice(pre+1,i))]
        }else {
          mat[sum-1] = []
          mat[sum-3].forEach(item => {
            mat[sum-1].push(getResult(item, expression.charAt(preto), getResult(
              expression.slice(preto+1,pre), expression.charAt(pre), expression.slice(pre+1,i))))
          })
          mat[sum-2].forEach(item=>{
            mat[sum-1].push(getResult(item, expression.charAt(pre), expression.slice(pre+1,i)))
          })
        }
        preto = pre
        pre = i
      }
    }
    if (sum === 0) {
      return [+expression]
    }else {
      res = []
      return getResult()
    }
  }
  console.log(diffWaysToCompute("2*3-4*5"));
