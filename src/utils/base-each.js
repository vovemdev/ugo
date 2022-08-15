/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Native 
// Base each
module.exports = Array.prototype.baseEach = function (initialValue){
    for(let i = 0; i< this.length; i++){
        initialValue(this[i], i, initialValue);
    };
};
