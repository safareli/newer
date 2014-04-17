# newer [![Build Status](http://img.shields.io/travis/Safareli/newer.svg)](http://travis-ci.org/Safareli/newer) [![NPM version](https://badge-me.herokuapp.com/api/npm/newer.png)](http://badges.enytc.com/for/npm/newer) [![Code Climate](https://codeclimate.com/github/Safareli/newer.png)](https://codeclimate.com/github/Safareli/newer)

> create new objects without `new`

## Getting Started
Install the module with: `npm install newer`

```javascript
var newer = require('newer');
var person = newer(Person);

//same as new Person(24,'jhon');
var jhon = person(24,'jhon');

function Person(age, name) {
    this.age = age;
    this.name = name;
}

Person.prototype.hallo = function(){
    return this.name + "'s age is " + this.age;
};
```

## Documentation

#### newer(constructor)

**Parameter**: `constructor`
**Type**: `Function`
**Example**: `Person`

newer function returns function which could be used to create generator for some constructors

## Contributing

Please submit all issues and pull requests to the [safareli/newer](http://github.com/safareli/newer) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/safareli/newer/issues).

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

