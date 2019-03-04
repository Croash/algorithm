function Node(element) {
  this.element = element
  this.next = null
}

function LinkList() {
  this.head = new Node('head')
}

LinkList.prototype = {
  find:function(item) {
    let currentNode = this.head
    while(currentNode!=null&&currentNode.element!=item) {
      currentNode = currentNode.next
    }
    return currentNode
  },
  insert:function(item) {
    
  }
}

const link = new LinkList()
console.log(link.find('123'))