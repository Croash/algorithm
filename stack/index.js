function stack (){
  this.items = []
}
stack.prototype.push = function (item) {
  this.items.push(item)
}

stack.prototype.pop = function () {
  return this.items.pop()
}

stack.prototype.isEmpty = function () {
  return this.items.length === 0
}

stack.prototype.clear = function () {
  this.items = []
}

stack.prototype.size = function(){
  return this.items.length;
}

stack.prototype.print = function(){
  return this.items.toString()
}

module.exports = stack
