function fewerLambdas () {
  var functions = arguments

  // convert all string arguments into field accessors
  var i = 0
  var l = functions.length
  while (i < l) {
    if (typeof (functions[i]) === 'string' || typeof (functions[i]) === 'number') {
      functions[i] = (function (str) { return function (d) { return d[str] } })(functions[i])
    }
    i++
  }
  
   // return composition of functions
  return function (d) {
    var i = 0
    var l = functions.length
    while (i++ < l) d = functions[i - 1].call(this, d)
    return d
  }
}

module.exports = fewerLambdas
