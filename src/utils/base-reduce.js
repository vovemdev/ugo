/*
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Base reduce
module.exports = Array.prototype.baseReduce = function baseReduce(callback, initialValue) {
    let accumulator = (initialValue === undefined) ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, initialValue);
        else
            accumulator = this[i];
    }
    return accumulator;
};
