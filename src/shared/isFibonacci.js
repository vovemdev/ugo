/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Contain fibonacci series
// [0..n] it can form a fibonacci series
module.exports = function isFibonacci (ar, n) {
    if(n == 1 || n == 2){
        return true;
    }
    ar.sort((b, c) => b - c);
    for(let i = 2; i < n; i++){
        if((ar[i -1] + ar[i -2]) != ar[i]){
            return false;
        }
    }
    return true;
};