// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。

let height = [1,8,6,2,5,4,8,3,7]

let sum = 0
height.forEach((itemFa,indexFa) => {
  height.forEach((item, index)=>{
    if(index>indexFa){
      let sumTem = (index-indexFa) * (itemFa>item ? item : itemFa)
      sum = sumTem > sum ? sumTem : sum
    }
  })
});
console.log(sum);
sum = 0
let i = 0
let j = height.length-1
while (j != i) {
  console.log(i,j);
    if(height[i]>height[j]){
      sum = ((j-i)* height[j] > sum) ? ((j-i)* height[j]) : sum
      j--
    }else{
      sum = ((j-i)* height[i] > sum) ? ((j-i)* height[i]) : sum
      i++
    }
}
console.log(sum);

