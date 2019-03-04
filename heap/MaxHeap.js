function MaxHeap(arr) {
  const data = arr || []
  this.heapArr = [...data]
}

const swapArr = (arr,a,b) => {
  [arr[a],arr[b]] = [arr[b],arr[a]]
}

const shiftDown = (data,n) => {
  // current n 
  // left 2*n+1
  // right 2*n+2
  while(Math.floor(data.length/2)-1>=n) {
    const current = n,
      left = 2*n+1,
      right = 2*n+2
    const max = Math.max(data[current],data[left],data[right])
    if(max===data[left]) {
      swapArr(data,current,left)
      n = left
    } else if(max===data[right]) {
      swapArr(data,current,right)
      n = right
    }
    else {
      break
    }
  }
}

const shiftUp = (data,n) => {
  while(n>0) {
    const current = n,
      parent = Math.floor((n-1)/2)
    const min = Math.min(data[current],data[parent])
    if(min==data[parent]) {
      swapArr(data,current,parent)
      n = parent
    } else {
      break
    }
  }
}

MaxHeap.prototype.init = function() {
  for(let i=Math.floor(this.heapArr.length/2)-1;i>=0;i--) {
    shiftDown(this.heapArr,i)
  }
}

MaxHeap.prototype.extractMax = function() {
  if(this.heapArr.length<=0) {
    return null
  }
  swapArr(this.heapArr,this.heapArr.length-1,0)
  const res = this.heapArr.pop()
  shiftDown(this.heapArr,0)
  return res
}

MaxHeap.prototype.insert = function(num) {
  this.heapArr.push(num)
  shiftUp(this.heapArr,this.heapArr.length-1)
}

module.exports = MaxHeap
