/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const { core } = require('./shared/index');
  
// Object Oriented Programming (OOP)
// Function with prototype
// Mathematical calculation

// Ugo which can mean 'heart', 'mind' or 'spirit'

module.exports = (function ugo (){
function ugo (){ 
    this.sum = 0;
    this.length = 0;
    };

    ugo.prototype.flatten = core.flatten;
    ugo.prototype.add = core.add;
    ugo.prototype.multiply = core.multiply;
    ugo.prototype.subtract = core.subtract;
    ugo.prototype.divide = core.divide;
    ugo.prototype.modulo = core.modulo;
    ugo.prototype.evenArray = core.evenArray;
    ugo.prototype.oddArray = core.oddArray;
    ugo.prototype.power = core.power;
    ugo.prototype.medianArray = core.meanArray;
    ugo.prototype.modeArray = core.modeArray;
    ugo.prototype.rangArray = core.rangArray;
    ugo.prototype.procise = core.procise;
    ugo.prototype.isFibonacci = core.isFibonacci;
    ugo.prototype.fibonacciGenerator = core.fibonacciGenerator;
    ugo.prototype.arrayMin = core.arrayMin;
    ugo.prototype.arrayMax = core.arrayMax;
    ugo.prototype.arrayAvg = core.arrayAvg;

    return ugo;
}.call(this));