/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Even array values of integer
module.exports = function evenArray (obj) {
    const resultEven = [];
    obj.forEach(n => {
    if(n % 2 === 0){
        resultEven.push(n);
    }
    })
    return resultEven;
};