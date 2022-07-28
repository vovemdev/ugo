# What is this ?

A Library to take care of all your mathematics needs

## Ugo Library

Ugo helps you to handle all your mathematics functionality

```
npm install rollup --save
```

The command will generate three javaScript files,

```
npm run js
```

- - ugo.cjs.js : CommonJS

- - ugo.es.js : ES6 Modules JavaScript

- - ugo.iife.js : Immediately Invoked Function Expression

How to use Ugo

## index.js

```
// import Ugo from './node_modules/vovem-ugo/dist/ugo.es.js' // npm
import Ugo from './dist/ugo.es.js' // local

let log = console.log;

const obj = new  Ugo();

// addition
const intValue = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
obj.add(obj.flatten(intValue)); // [1,2,3,4,5,6,7,8,9]

//or
// obj.add([2,5,1]) // 8

// sum the integer values
log(`The addition result is: ${obj.sum}`);
log(`The length value is: ${obj.length}`);

// Subtraction
const valueSub = obj.subtract(obj.sum,2);
log(`The subtraction result is: ${valueSub}`);

// Multiplication
const valueMul = obj.multiple(obj.sum,2);
log(`The Multiplication result is: ${valueMul}`);

// Division
const valueDiv = obj.divide(obj.sum,2);
log(`The Division result is: ${valueDiv}`);

```

## index.html

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Ugo Library</title>
	</head>
	<body>
		<p>Test ugo library with browser console.</p>
		<script src="./index.js" type="module"></script>
	</body>
</html>

```

## CommonJS

```
const Pkg  = require('./node_modules/vovem-ugo/dist/ugo.cjs.js');
const log = console.log;

const  obj = new Pkg();

// array
const intValue = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

// sum the integer values
obj.add(obj.flatten(intValue)); // [1,2,3,4,5,6,7,8,9]
log(`The addition result is: ${obj.sum}`);
log(`The length value is: ${obj.length}`);

// Even number in array
const isEvenNnmber = obj.flatten(intValue);
const resultEv = obj.evenArray(isEvenNnmber);
log(` The even number are : ${resultEv}`);

// Odd number in array
const isOddNnmber = obj.flatten(intValue);
const resultOd = obj.oddArray(isOddNnmber);
log(` The odd number are : ${resultOd}`);

// Exponential
log(`The exponential of 2,4 is : ${obj.exponent(2,4)}`);  // 16

// Power
log(`The Power of 5^3 is : ${obj.power(5,3)}`) // 125

// Modulo (Modulus)
log(`The Modulo of 3 % 2 is : ${obj.modulo(3,2)}`) // 1

// Mean array
log(`The Mean number is : ${obj.meanArray([2,4,5,7,1,8,1])}`); // 4

// Median array
log(`The median number is : ${obj.medianArray([11,16,17,10,2,12,24])}`); // 12

// Mode array
log(`The mode number is : ${obj.modeArray([3,2,5,3,5,5])}`); // 5

// Range array
log(`The Range numbers are : ${obj.rangeArray([3,5,6,8,2,9,2])}`); // 2,9
```

## Options

- - Additon
- - Aubtraction
- - Multiplication
- - Division
- - Modulus
- - Flatten
- - Even number in array
- - Odd number in array
- - Exponential
- - Power
- - Mean in array
- - Median in array
- - Mode in array
- - Range in array

## NPM Package

```
https://www.npmjs.com/package/vovem-ugo

```

# Installation

`npm i vovem-ugo --save`
