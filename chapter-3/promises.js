let readFromDb = function(table) {
  return new Promise((fulfill, reject) => {
    console.log(`Reading from ${table}`)

    fulfill(`${table} - Data`)
  })
}

let manipulateData = function(data) {
  return new Promise((fulfill, reject) => {
    data = data + ' - DONE IT'
    console.log(`Manipulating data ${data}`)

    fulfill(data)
  })
}

let promise = readFromDb('tblSurvey')

Promise.resolve(promise)
  .then(manipulateData)
  .then((data) => {
    console.log(`Done, got ${data}`)
  })
