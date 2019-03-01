function MaxHeap(arr) {
  const data = arr || []
  this.heapArr = new Array(data.length)
}

MaxHeap.prototype.init = function() {
  for(let i=Math.floor(this.heapArr.length/2);i>=0;i--) {
    shiftDown(this.data,i)
  }
}

MaxHeap.prototype.insert=function(item){
  this.heapArr.push(item);
  let n=this.heapArr.length-1;
  shiftUp(this.heapArr,n);
}

MaxHeap.prototype.extractMax=function(){
  if(this.data.length>1){
    let tail=this.data.pop();
    this.data[1]=tail;
    let n=1;
    //只要有左孩子就继续判断并交换
    shiftDown(this.data,n);
  }

};

const shiftDown = (data,n)=>{
  //循环条件： 有左孩子且左孩子和右孩子中至少有一个大于当前元素
  while(2*n<data.length&&(data[n]<data[2*n]||data[n]<data[2*n+1])){
    let temp;
    //有右孩子，且右孩子大于左孩子
    if(data[2*n]<data[2*n+1]){
      temp=data[n];
      data[n]=data[2*n+1];
      data[2*n+1]=temp;
      n=2*n+1;
    }else{            //包含右孩子比左孩子小和没有右孩子两种情况
      temp=data[n];
      data[n]=data[2*n];
      data[2*n]=temp;
      n=2*n;
    }
  }
}

const shiftUp = (data,n) => {
  while(n>1&&data[n]>data[Math.floor(n/2)]){
    let m=Math.floor(n/2);
    let temp=data[n];
    data[n]=data[m];
    data[m]=temp;
    n=m;
  }
}

console.log('明白了，自己实现一个好了')