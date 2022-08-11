/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const base = require('./base');

const defaultValues = {
    undefinedVaule: 'object Undefined', 
    nullValue: '[object Null]'
}

// getTag
module.exports = function getTag(value) {
    if(value == null){
        return value === undefined ? defaultValues.undefinedVaule : defaultValues.nullValue;
    }
    return base.object.call(value);
};
