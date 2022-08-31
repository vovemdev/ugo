/*
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Base map
module.exports = Array.prototype.baseMap = function baseMap(initialValue){
    array = [];
    for(let i = 0; i < this.length; i++){
        array.push(initialValue(this[i], i, this));
        return array;
    };
};