function MaxHeap(arr) {
  const data = arr || []
  this.heapArr = new Array(data.length)
}

MaxHeap.prototype.init = function() {
  for(let i=Math.floor(this.heapArr.length/2);i>=0;i--) {
    console.log('func')
  }
}

console.log('how to init')