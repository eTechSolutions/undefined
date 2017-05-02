let obj = {
  name: 'Rob',
  dothing: function() {
    console.log('hello')
  }
}

// does this work?
obj.age = 32

// what happens when we log an object
console.log(obj)

// what does this do?
console.log(obj['age'])

obj['name'] = 'test'
console.log(obj)

// Now Try!
// create an object using object literal
// assign a property using property syntax
// addign a property using key syntax
// add function to object
// execute function
