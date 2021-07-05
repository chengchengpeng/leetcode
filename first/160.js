var getIntersectionNode = function(headA, headB) {
    let set = new Set()
    let tem = headA
    while (tem) {
      set.add(tem)
      tem = tem.next
    }
    tem = headB
    while (tem) {
      if (set.has(tem)) {
        return tem
      }
      tem = tem.next
    }
    return null
};
