let Car = function() {

  this.engine = 'fast'
  this.lol = function() {
    console.log(this.engine)
  }
}

let car = new Car()

car.lol()
