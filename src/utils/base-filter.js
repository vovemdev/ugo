/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Native
// Base filter
module.exports = Array.prototype.baseFilter = function baseFilter(callback, initialValue){
    arr = [];
    for(let i = 0; i < this.length; i++){
        if(callback.call(initialValue, this[i], i, this)){
            arr.push(this[i]);
        };
        return arr;
    };
};
