//define constructor for cars with an engineSpeed parameter, then set object properties using 'this'
let Car = function(engineSpeed) {

  this.engine = engineSpeed
  this.lol = function() {
    console.log(this.engine)
  }
}

//create a new car with a fast engine
let fastCar = new Car("fast")
//create a new car with a slow engine
let slowCar = new Car("slow")

//output engine speeds
fastCar.lol()
slowCar.lol()

//Now Try
//define a constructor for dogs with a parameter for the breed, and store in a property
//add a function to display the breed
//create a pitbull and a bulldog and output their breed using the function you created

