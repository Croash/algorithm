const Stack = require('./stack')



const pair = {
  '}': '{',
  ']': '['
}
const left = ['{', '[']

const pathSolve = path => {
  const stack = new Stack()
  for (item of path) {
    if(stack.isEmpty()||left.includes(item)) {
      stack.push(item)
    }
    else {
      if(pair[item]!==stack.pop()) {
        return false
      }
    }
  }
  return true
}
const path = [ '{', '[', ']', '}' ]
const res = pathSolve(path)
console.log(res)
