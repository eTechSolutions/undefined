//define an array to loop through
let arr = ['first', 'second', 'third']

//iterating through each index
for (let i = 0; i < arr.length; i++) {
  console.log(`${i} - ${arr[i]}`)
}

//iterating through each index with less syntax
for (let t in arr) {
  console.log(t)
}

//iterating through each object
for (let o of arr) {
  console.log(o)
}

//define an object
let obj = {
  first: 'first_val',
  second: 'second_val'
}

//iterate through each key?
for (let k in obj) {
  console.log(k)
}


// for (let v of Object.getOwnPropertyNames(obj)) {
//   console.log(obj[v])
// }
