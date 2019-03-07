const { Node, LinkList } = require('./linkList')

const link = new LinkList()
link.insert(123)
console.log(link.find('123'))
console.log(link.size(),link.empty())
const element = link.find('123')
link.remove(element)
console.log(link.size(),link.empty())