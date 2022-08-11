/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Exponential values of integer
module.exports = function exponent (a, b){
    let e = 1;
    for(let i = 1; i <= b; i++) {
        e *= a;
    }
    return e;
};