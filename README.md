# newer [![Build Status](http://img.shields.io/travis/Safareli/newer.svg)](http://travis-ci.org/Safareli/newer) [![NPM version](https://badge-me.herokuapp.com/api/npm/newer.png)](http://badges.enytc.com/for/npm/newer) [![Code Climate](https://codeclimate.com/github/Safareli/newer.png)](https://codeclimate.com/github/Safareli/newer)
 
> create object generator from constructor without `new`

## Usage

> you need `newer` when the class constructor accesses the arguments array directly

```javascript
var newer = require('newer');
var personGen = newer(Person);

//same as new Person(24, 'UI', 'UX', 'OpenGl');
var jhon = personGen(24, 'UI', 'UX', 'OpenGl');

function Person(name) {
    this.name = name;
    this.skills = [].slice.call(arguments, 1);
}

Person.prototype.hallo = function(){
    return this.name + "'s skiils: " + this.skills.join(' ');
};
```

## Documentation

#### newer(constructor)

**Parameter**: `constructor`
**Type**: `Function`

`newer` returns function which could be used to create new instances of constructor




## License 

The MIT License

Copyright (c) 2014, Irakli Safareli

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

