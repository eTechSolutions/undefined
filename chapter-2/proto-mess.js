let Parent = function() {}

Parent.prototype.func = function() {
  console.log('parent func')
}
Parent.name = 'parent'
Parent.prototype.name = 'parent.prototype'

let Child = function() {
  this.name = 'Child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.name = 'Child.prototype'

// let child = new Child()
// child.func()

let first = new Child()
first.func() // ??

let second = new Child()
Parent.prototype.func = function() {
  console.log('uh oh!')
}
second.func() // ??

let third = new Child()
third.func() // ??

// console.log('child', child)
// console.log('child.__proto__', child.__proto__)
// console.log('child.__proto__.__proto__', child.__proto__.__proto__)
