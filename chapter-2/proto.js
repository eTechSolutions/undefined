let Animal = function() {}
Animal.prototype.noise = function() {
  console.log(this.sound)
}

let Cat = function() {
  this.sound = 'meow'
}
Cat.prototype = Object.create(Animal.prototype)

let cat = new Cat()
cat.noise()
