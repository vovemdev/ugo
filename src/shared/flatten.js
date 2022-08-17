/* 
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

require('../utils/base-each');

// Flatten arrays
module.exports =  function flatten (obj) {
    const resultArr = [];
    obj.baseEach((e) => {
        if(Array.isArray(e)){
            resultArr.push(...flatten(e));
        }else{
            resultArr.push(e);
        }
    });
    return resultArr;
};
