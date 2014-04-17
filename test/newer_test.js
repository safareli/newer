/*
 * newer
 * https://github.com/safareli/newer
 *
 * Copyright (c) 2014 Irakli Safareli
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.should();

var newer = require('../lib/newer.js');

describe('newer', function(){
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    
    Person.prototype.hallo = function(){
        return this.name + "'s age is " + this.age;
    };
    
    it('should create generator function', function(){
        var person = newer(Person);
        person.should.be.instanceof(Function);
    });
    
    it('generated object should be instance of constructor', function(){
        var person = newer(Person);
        var jhon = person(24,'jhon');
        jhon.should.be.instanceof(Person);
    });
});
