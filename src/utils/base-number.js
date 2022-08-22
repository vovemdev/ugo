/*
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const symbol = require('./base-symbol');

//baseNumber
module.exports = function baseNumber(value) {
    if ( typeof value === 'number'){
        return value;
    }
    // isSymbolObject(value)
       if(symbol(value)){
        return 0 / 0;
    }
    return  value
}
