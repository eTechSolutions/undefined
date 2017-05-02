let obj = {
  name: 'Object Property',
  exec: function() {
    console.log('hello ', this.name)
  }
}

obj.exec() // ??

let exec = obj.exec
exec() // ??

let o = {
  name: 'Other Object'
}
o.exec = exec
o.exec() // ??

function lol() {
  this.name = 'Other Function'
  exec() // ??
}
lol()

this.name = 'set name on this'
exec() // ??

name = 'set name'
exec() // ??

exec.apply(obj) // ??

let bound = exec.bind(obj)
bound() // ??
