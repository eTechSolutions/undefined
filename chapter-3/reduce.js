let arr = [{first: 'first'}, {second: 'second'}, {third: 'third'}]

let output = arr.reduce((o, i) => {
  Object.getOwnPropertyNames(i).map(p => o[p] = i[p])
  return o
}, {})

console.log(output)
