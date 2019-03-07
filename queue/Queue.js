function Queue() {
  this.dataStore = [];
  // this.enqueue = enqueue;
  // this.dequeue = dequeue;
  // this.front = front;
  // this.back = back;
  // this.toString = toString;
  // this.empty = empty;
}

Queue.prototype.enqueue =function(item) {
  this.dataStore.push(item)
}

Queue.prototype.dequeue = function(item) {
  return this.dataStore.pop()
}

Queue.prototype.front = function() {
  return this.dataStore[0]
}

Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length-1]
}

Queue.prototype.isEmpty = function() {
  return this.dataStore.length==0
}

Queue.prototype.clear = function() {
  this.dataStore=[]
}

Queue.prototype.toString = function() {
  return this.dataStore.map(item=>`${item}\n`).join('')
}

module.exports = Queue

let queue = new Queue()
