let test = 1

let fact = function(inp) {
  let name = inp

  return {
    hello: () => {
      test = test + 1
      console.log(name, ' ', test)
    }
  }
}

let one = fact('first')
let two = fact('second')

one.hello()
two.hello()
