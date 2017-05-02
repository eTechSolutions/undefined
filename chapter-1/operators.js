console.log(true && false)
console.log(true || false)

console.log(1 || false)
console.log('' || 'Hello Ricardo')
console.log(!!('' || 'Hello Ricardo'))

let obj = {}
console.log(obj && obj.fred || 'WTF?')

// WHY??!?
function defaultValues(opts) {
  let display = opts.display
  let run = opts.run || 'true'

  console.log(`display: ${display}, run: ${run}`)
}

test({display: 'full'})


function nullPropagation(opts) {
  let display = opts && opts.display || 'default'

  console.log(display)
}
