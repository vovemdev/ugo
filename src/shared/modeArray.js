/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Mode of array integer
module.exports = function modeArray (n){
    const mod = []; 
    let countNumbers = [], 
    modeIndex = 0, i, e;

    for(i = 0; i < n.length; i += 1){
        e = n[i];
        countNumbers[e] = (countNumbers[e] || 0) + 1;
        if(countNumbers[e] > modeIndex){
            modeIndex = countNumbers[e];
        }
    }
    for(i in countNumbers){
        if(countNumbers.hasOwnProperty(i)){
            if(countNumbers[i] === modeIndex){
                mod.push(Number(i));
            }
        }
    }
    return mod;
};