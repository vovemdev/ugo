/*
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Arithmetic
// Operator that perform arithmetic on numbers 
// (Addition, Subtraction, Multiplication, Exponentiation, Division, Modulus, Increment, Decrement)

const baseString = require('./base-string');
const baseNumber = require('./base-number');

module.exports = function arithmetic(math, defaultValue){
    return (value, pass) => {
        if(value === undefined && pass === undefined){
            return defaultValue;
        }
        else if( typeof value === 'string' || pass === 'string'){
            value = baseString(value); pass = baseString(pass);
        }else{
             value = baseNumber(value); pass = baseNumber(pass);
        }
        return math(value, pass);
    };
};