/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Flatten arrays
module.exports = function flatten (obj) {
    const resultArr = [];
    obj.forEach((e) => {
        if(Array.isArray(e)){
            resultArr.push(...flatten(e));
        }else{
            resultArr.push(e);
        }
    });
    return resultArr;
};