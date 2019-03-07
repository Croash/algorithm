function Node(element) {
  this.element = element
  this.next = null
}

function LinkList() {
  this._head = new Node(null)
  this._size = 0
}

// api
// isEmpty
// size
// getHead
LinkList.prototype = {
  find:function(item) {
    let currentNode = this._head
    while(currentNode!=null&&currentNode.element!=item) {
      currentNode = currentNode.next
    }
    return currentNode
    // O(n)
  },
  empty:function() {
    return this._size == 0
  },
  insert:function(newElement,item) {
    const newNode = new Node(newElement)
    const finder = item? this.find(item):null
    if(!finder) {
      const last = this.findLast();
      last.next = newNode
    }
    else {
      newNode.next = finder.next
      finder.next = newNode.next
    }
    this._size++
  },
  remove:function(item) {
    if(item) {
      const preNode = this.findPre(item)
      if(preNode == null) 
        return null
      if(preNode.next != null) {
        preNode.next = preNode.next.next
        this._size--
      }
    }
  },
  size:function() {
    return this._size
  },
}

LinkList.prototype.findLast = function() {
  let currentNode = this._head
  while(currentNode.next) {
    currentNode = currentNode.next
  }
  return currentNode
}

LinkList.prototype.findPre = function(element) {
  let currentNode = this._head
  while(currentNode && currentNode.next && currentNode.next!=element) {
    currentNode = currentNode.next
  }
  return currentNode
}

module.exports = {
  Node,
  LinkList
}
