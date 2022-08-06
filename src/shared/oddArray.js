/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Odd array values of integer
module.exports = function oddArray (obj) {
    const resultOdd = obj.filter(n => {
        return n % 2 != 0;
    })
        return resultOdd;
    };