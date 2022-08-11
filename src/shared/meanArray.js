/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const arithmetic = require('../utils/arithmetic');

// Mean of array integer
module.exports = function meanArray (n){
    const avg = n.arithmetic((a, b) => a + b, 0) / n.length;
    return avg;   
};