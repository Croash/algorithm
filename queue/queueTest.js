const Queue = require('./Queue')
const queue = new Queue()
let arr = [1,2,3,4,5,'a']
arr.forEach(item=>{
  queue.enqueue(item)
})
console.log(queue.toString())
