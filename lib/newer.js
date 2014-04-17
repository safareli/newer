/*
 * newer
 * https://github.com/safareli/newer
 *
 * Copyright (c) 2014 Irakli Safareli
 * Licensed under the MIT license.
 */

'use strict';

module.exports =  function(constructor){
    return function() {
        var instance = Object.create(constructor.prototype);
        var result = constructor.apply(instance, arguments);
        return typeof result === 'object' ? result : instance;
    };
};
