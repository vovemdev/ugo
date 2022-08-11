/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const arithmetic = require('../utils/arithmetic');

// Multiplication values of integer
module.exports = function multiply (a, b) {
    return [a, b].arithmetic((a, b) => a * b, 0)
 };