class Node{
  constructor(key,val){
      this.key = key;
      this.val = val;
  }
}
// 双链表
class DoubleList{
  // 初始化头、尾节点、链表最大容量
  constructor(){
      this.head = new Node(0,0);
      this.tail = new Node(0,0);
      this.size = 0;
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }
  // 在链表头部添加节点
  addFirst(node){
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next.prev = node;
      this.head.next = node;
      this.size++;
  }
  // 删除链表中存在的node节点
  remove(node){
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.size--;
  }
  // 删除链表中最后一个节点，并返回该节点
  removeLast(){
      // 链表为空
      if(this.tail.prev == this.head){
          return null;
      }
      let last = this.tail.prev;
      this.remove(last);
      return last;
  }
}

module.exports = {
  Node,
  DoubleList
}
