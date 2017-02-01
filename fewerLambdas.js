var f = function () {
  var functions = arguments

  // convert all string arguments into field accessors
  var i = 0
  var l = functions.length
  while (i < l) {
    if (functions[i] in f._) {
      functions[i] = (function (f) { return function (d) { return f(d) } })(f._[functions[i]])
    } else if (typeof (functions[i]) === 'string' || typeof (functions[i]) === 'number') {
      functions[i] = (function (str) { return function (d) { return d[str] } })(functions[i])
    } else if (typeof (functions[i]) === 'object') {
      functions[i] = (function (map) { return function (d) { return map[d] } })(functions[i])
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

f._ = {
  'ƒ.call': function (d) { return d() },
  'ƒ.not': function (d) { return !d }
}

module.exports = f
