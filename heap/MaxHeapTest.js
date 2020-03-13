const MaxHeap = require('./MaxHeap')

const arr = [5211,1,2,223,42,5]
const heap = new MaxHeap(arr)
heap.init()

heap.insert(2222)
console.log(heap.heapArr)
heap.update(9996, 6)
// const sortArr = []

// while(heap.heapArr.length>0) {
//   const res = heap.pop()
//   sortArr.push(res)
// }



console.log(heap.heapArr)

console.log('明白了，自己实现一个好了')