/*
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const symbol = require('./base-symbol');
const base = require('./base');

 const infinity = {
    zero: '0',
    nigativeZero: '-0'
 }

module.exports = function baseString(value) {
    if( typeof value === 'string'){
        return;
    }
    if(symbol(value)){
        return base.symbol ? base.symbol.call(value) : '';
    }
    if(Array.isArray(value)){
        return `${value.map(baseString)}`;
    }
    const out = `${value}`;
    const InfinityValue = 1 / `${value}`;
    return (out === infinity.zero && (InfinityValue) === (1/0)) ? infinity.nigativeZero : out;
}