// Dynamic Typing
let obj = { prop: 'hello' }
obj.fun = 'hello!'

// Boolean Operators
let output = undefined || 'Hello Guys' // Hello Guys

// Type coersion
1 == '1' // true
NaN == NaN // false

// truthy/falsey
if ('hello') // true
if (undefined) // false
if (null) // false

// this

// scope
if (true) {
  var a = 1
}
console.log(a) // Works!
