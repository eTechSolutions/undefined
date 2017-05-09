// Define a function expression (The function is actually an anonymous function)
let f = function() {
  console.log('let f = function() {')
}

// Defining a function (visible in stack trace), (Function declarations load before any code is executed.)
function func() {
  console.log('func()')
}

// define an expression with no parameter
let e = () => {

}

// define an expression, with parameter a
let ex = a => {

}

// define a single line expression
let single = () => console.log('single line')

// define another single line expression, with a return value
let returnsingle = () => '4 + 5'

// Define a function expression with 2 parameters
let fun = function(hello, b) {
  console.log(hello)
  console.log(b)
}

// Now try
// Define a function expression and call it before the delcaration
// Define a function and call it before the delcaration
// note what was different and try explain why.
