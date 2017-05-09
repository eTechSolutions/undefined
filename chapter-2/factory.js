let test = 1 // static? ish data, scoped to file

// Just a function that returns objects
let fact = function(inp) { // use parameters or local variables for private data
  let name = inp

  // return the new object
  return {
    hello: () => {
      test = test + 1
      console.log(name, ' ', test)
    }
  }
}

// call function to create objects
let one = fact('first')
let two = fact('second')

one.hello()
two.hello()

// Try Me!
// Make an instruction factory, hold name/address as private data
// expose address via an instruction
