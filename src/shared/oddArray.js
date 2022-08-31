/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

require('../utils/base-filter');

// Odd array values of integer
module.exports = function oddArray (obj) {
    const resultOdd = obj.baseFilter(n => {
        return n % 2 != 0;
    })
        return resultOdd;
    };