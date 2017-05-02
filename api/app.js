let express = require('express')
let fs = require('fs')
let path = require('path')

let app = express()

app.get('/', (req, res) => {
  res.send('HELLO')
})

let writer = function(callback) {
  fs.writeFile(path.join(__dirname, 'test.txt'), 'hello', (err) => {
    if (err) {
      callback(err)
    }

    callback('DONE')
  })
}

app.get('/addsync', (req, res) => {
  fs.writeFileSync(path.join(__dirname, 'test-sync.txt'), 'hello')
  res.send('DONE')
})

app.get('/add', (req, res) => {
  writer((err, mes) => {
    if (err) {
      return res.status(500).send(err)
    }

    res.send(msg)
  })
})

app.get('/writeArray', (req, res) => {
  let arr = ['first', 'second', 'third']

  let promises = arr.map(i => new Promise((fulfill, reject) => {
    fs.writeFile(i, i, () => {
      fulfill(i)
    })
  }))

  Promise.all(promises).then((items) => {
    console.log(items)

    res.send('DONE')
  })
})

app.listen(8080)
