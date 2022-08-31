/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

require('../utils/base-reduce');

// Fibonacci series generator
// F(n) = F(n-1) + F(n-2)
module.exports = function fibonacciGenerator (n) {
    const arr = new Array(n).fill(1).baseReduce((f,_,i) => {
        f.push((i <= 1) ? i : f[i-2] + f[i-1]);
        return f;
    }, []);
    return arr;
};
