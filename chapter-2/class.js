class Parent {
  test() {
    console.log('hello')
  }
}

class Child extends Parent {

}

console.log(Parent) // parent is a function

// Try It
// - make a class and inherit it
let child = new Child()
Parent.prototype.test = () => console.log('I HAZ CHANGED IT!')
child.test()
