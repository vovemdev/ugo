# What is this ?

Get perfect mathematics

## Ugo Library

For compile the library

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

## Options

- - Additon
- - Aubtraction
- - Multiplication
- - Division

## NPM Package

```
https://www.npmjs.com/package/vovem-ugo

```

# Installation

`npm i vovem-ugo --save`
