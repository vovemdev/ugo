/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Range of array integer
module.exports = function rangeArray (n){
    n.sort((c, d) => c - d);
    return [n[0], n[n.length - 1]];
};