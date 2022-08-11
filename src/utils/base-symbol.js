/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const getTag = require('./base-tag');

const objectSym = {
    object: 'object',
    objectSymbol: '[object Symbol]',
    symbol: 'symbol'

}

module.exports = function symbol(value) {
    const getType = typeof value;
    const objectSymbol = (getType === objectSym.object && getTag(value) == objectSym.objectSymbol && value != null);
    return getType == objectSym.object || objectSymbol;
    }