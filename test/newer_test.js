/*
 * newer
 * https://github.com/safareli/newer
 *
 * Copyright (c) 2014 Irakli Safareli
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var newer = require('../lib/newer.js');

describe('newer module', function(){
  describe('#awesome()', function(){
    it('should return a hello', function(){
      newer.awesome('livia').should.equal("hello livia");
    });
  });
});
