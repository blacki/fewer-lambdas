# ƒewer-lambdas

## ƒ references

This steals heavily from the folowing:

[phrogz's fewer lambdas](http://phrogz.net/fewer-lambdas-in-d3-js)

[roadtolarissa's even fewer lambdas](http://roadtolarissa.com/blog/2014/06/23/even-fewer-lamdas-with-d3/)

[d3-jetpacks's implementation](https://github.com/gka/d3-jetpack#ƒ-or-d3f)

## ƒ usage

```js
var ƒ = require('fewer-lambdas')
```

Note the function name `ƒ` is a legal [JavaScript identifier](http://stackoverflow.com/questions/1661197/what-characters-are-valid-for-javascript-variable-names/9337047#9337047). This character is easy to type in OSX by using `option + f`.

`ƒ` takes a string|number and returns a function that takes an object and returns whatever property the string is named. 

This lets you replace ``function(d){ return ... }`` ECMAScript 5 lambda function syntax with the shorter easy to use `ƒ(...)` function.


## Examples

#### Identity function

Given an array

```js
[1,2,3,4,...].map(function(d){ return d})
```
becomes

```js
[1,2,3,4,...].map(ƒ())
```

#### Object properties

Given an array of objects

```js
var data = [
  {
    key:'0',
    value:0.00
  },
  {
    key:'1',
    value:1.11
  },
  {
    key:'2',
    value:2.22
  },
  ...
]
```

The following

```js
data.map(function(d){ return d.value})
```

becomes

```js
data.map(ƒ('value'))
```

#### Function composition

The following

```js
data.map(function(d){ return parseInt(d.value)})
```

becomes

```js
data.map(ƒ('value',parseInt))
```

#### Fat arrow

Combine this with Es6 fat arrow functions and things get even more shorter

```js
data.map(ƒ('value', Math.abs, JSON.stringify, d => d.split('.'), d => d.join(''), d => +d))
```