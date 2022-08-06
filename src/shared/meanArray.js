/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Mean of array integer
module.exports = function meanArray (n){
    const sum = n.reduce((a, b) => a + b) 
    const avg = sum / n.length;
    return avg;   
};