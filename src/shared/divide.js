/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Division values of integer
module.exports = function divide (a, b) {
        return [a, b].reduce((a, b) => a / b)
    };