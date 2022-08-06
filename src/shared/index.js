/*! 
vovem-ugo v2.3.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const core =  {
    flatten: require('./flatten'),
    add: require('./add'),
    multiply: require('./multiply'),
    subtract: require('./subtract'),
    divide: require('./divide'),
    modulo: require('./modulo'),
    evenArray: require('./evenArray'),
    oddArray: require('./oddArray'),
    exponent: require('./exponent'),
    power: require('./power'),
    meanArray: require('./meanArray'),
    modeArray: require('./modeArray'),
    rangArray: require('./rangeArray'), 
    procise: require('./procise'),
    isFibonacci: require('./isFibonacci'),
    fibonacciGenerator: require('./fibonacciGenerator'),
    arrayMin: require('./arrayMin'),
    arrayMax: require('./arrayMax'),
    arrayAvg: require('./arrayAvg'),
}

module.exports = { core };