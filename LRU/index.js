const {
  Node,
  DoubleList
} = require('../doubleLinkList')

class LRUCache {
  constructor(limit) {
    this.limit = limit
    this.map = new Map()
    this.cache = new DoubleList()
  }

  put = (key, value) => {
    let cache = this.cache
    let map = this.map
    let node = new Node(key, value)
    if(map.has(key)) {
      cache.remove(map.get(key))
    } else {
      if(cache.size() === this.limit ) {
        let last = cache.removeLast();
        map.delete(last.key);
      }
    }
    cache.addFirst(node);

    map.set(key,node);
  }

  get = (key) => {
    let map = this.map
    if(!map.has(key)){
      return -1;
    }
    let val = map.get(key).val;
    // 最近访问数据置前
    this.put(key,val);
    return val;
  }
}

module.exports = {
  LRUCache
}
