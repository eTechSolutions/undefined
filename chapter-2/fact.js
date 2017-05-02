let test = 'hello'

module.exports = function(inp) {
  let name = inp

  return {
    pub: 'string',
    hello: function() {
      console.log(name, test)
    }
  }
}
