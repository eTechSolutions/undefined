// let arr = ['first', 'second', 'third']

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i} - ${arr[i]}`)
// }

// for (let t in arr) {
//   console.log(arr[t])
// }

// for (let o of arr) {
//   console.log(o)
// }

let obj = {
  first: 'first_val',
  second: 'second_val'
}

console.log('in loop')
for (let k in obj) {
  console.log(k)
}

console.log('of loop')
for (let v of Object.getOwnPropertyNames(obj)) {
  console.log(obj[v])
}
