function MinHeap(arr) {
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
    const min = Math.min(data[current],data[left],data[right])
    if(min===data[left]) {
      swapArr(data,current,left)
      n = left
    } else if(min===data[right]) {
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
    const max = Math.max(data[current],data[parent])
    if(max==data[parent]) {
      swapArr(data,current,parent)
      n = parent
    } else {
      break
    }
  }
}

MinHeap.prototype.init = function() {
  // 由下至上 下沉节点，当下层节点拍好顺序，上层节点直接下沉，结果即为符合最大堆顺序的
  for(let i=Math.floor(this.heapArr.length/2)-1;i>=0;i--) {
    shiftDown(this.heapArr,i)
  }
}

MinHeap.prototype.size = function() {
  return this.heapArr.length
}

MinHeap.prototype.top = function() {
  return this.heapArr.length >0 ? this.heapArr[0] : null
}

MinHeap.prototype.extractmin = function() {
  // 顶和底对换，然后pop之前的顶（当前底）；然后下沉当前的顶，即为最新的最大堆
  if(this.heapArr.length<=0) {
    return null
  }
  swapArr(this.heapArr,this.heapArr.length-1,0)
  const res = this.heapArr.pop()
  shiftDown(this.heapArr,0)
  return res
}

MinHeap.prototype.insert = function(num) {
  this.heapArr.push(num)
  shiftUp(this.heapArr,this.heapArr.length-1)
}

module.exports = MinHeap
