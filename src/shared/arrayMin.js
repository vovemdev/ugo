/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

require('../utils/base-reduce');

// Array min
module.exports = function arrayMin (n) {
    return n.baseReduce((p, c) => {
        return (p < c ? p : c);
    })
};