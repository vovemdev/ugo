/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const arithmetic = require('../utils/arithmetic');

// Factorial
// (n)=n*(n-1)*...* 1
module.exports = function factorial (n) {
    if(! Number.isInteger(n)){
        return undefined;
    }
    if(n < 0){
        return undefined;
    }
    if(n === 0){
        return 1;
    }
    const a = [...Array(n+1).keys()].slice(1)
    return a.reduce((p, c) => p * c);
}
