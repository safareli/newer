# newer [![Build Status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![Code Climate][climate-image]][climate-url]
> create object generator from constructor without `new`

[![NPM franim][nodei-image]][npm-url]

[npm-url]: https://npmjs.org/package/newer
[npm-image]: https://badge.fury.io/js/newer.png

[travis-url]: http://travis-ci.org/safareli/newer
[travis-image]: http://img.shields.io/travis/safareli/newer.svg

[climate-url]: https://codeclimate.com/github/safareli/newer
[climate-image]: https://codeclimate.com/github/safareli/newer.png

[nodei-image]: https://nodei.co/npm-dl/newer.png?months=1

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
