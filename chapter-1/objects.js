let obj = {
  name: 'Rob',
  dothing: function() {
    console.log('hello')
  }
}

obj.age = 32

// console.log(obj)

// obj['dothing']()

obj['name'] = 'test'
console.log(obj)
