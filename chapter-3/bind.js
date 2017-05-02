// let f = function(a, b, c) {
//   console.log(`${this}, ${a}, ${b}, ${c}`)
// }
//
// let b = f.bind('this is not this?', 'fart')
//
// b('blah', 'bloo')

let obj = {
  name: 'hello',
  exec: function(oth, second) {
    console.log(this.name, oth, second)
  }
}
// obj.exec()

let exec = obj.exec
// exec.apply(obj)

let bound = exec.bind(obj, 'first')
bound('second')
// bound('third')
