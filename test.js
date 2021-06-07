function test(arr) {
  let queue = []
  for (let item of arr) {
  queue.push(item)
  }
  while (queue.length) {
    let item = queue.shift(), flag, length = item.children
    if (length) {
      for (let it of item.children){
        queue.push(it)
        if (item.selected) {
          flag = true
        }
      }
      item.selected = item.children ? item.children && flag : true
    }
  }
}

const arr = [
  {
    name: "用户管理",
    selected: true,
    id: "1001",
    children: [
      {
        name: "患者管理",
        selected: true,
        id: "2004",
        relationId: "4505",
        children: [
          {
            name: "添加用户",
            selected: false,
            id: "2004",
            relationId: "4505",
            children: [],
          },
        ],
      },
      {
        name: "孕妇管理",
        selected: false,
        id: "2004",
        relationId: "4505",
      },
    ],
  },
];
test(arr)
console.log(arr);
