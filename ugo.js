// Object Oriented Programming (OOP)
// Function with prototype
// Mathematical calculation

// Ugo which can mean 'heart', 'mind' or 'spirit'

// Constructor function
function Ugo (){ 
    this.sum = 0;
    this.length = 0;
    };
    // Addition values of integer
    Ugo.prototype.add = function (obj) {
    obj.forEach(function count(e){
        this.sum += e;
        ++this.length;
    },this);
    };
     // Subtraction values of integer
     Ugo.prototype.subtract = function (a, b) {
       return [a, b].reduce((a, b) => a - b)
    }; 
    // Multiplication values of integer
    Ugo.prototype.multiply = function (a, b) {
        return [a, b].reduce((a, b) => a * b)
     };
    // Division values of integer
    Ugo.prototype.divide = function (a, b) {
        return [a, b].reduce((a, b) => a / b)
    };
    // modulus operation (remainder) values of integer
    Ugo.prototype.modulo = function (a, b){
        return ((a % b) + b) % b;
    };
    // Flatten
    Ugo.prototype.flatten = function flat (obj) {
        const resultArr = [];
        obj.forEach((e) => {
            if(Array.isArray(e)){
                resultArr.push(...flat(e));
            }else{
                resultArr.push(e);
            }
        });
        return resultArr;
    };
        // Even array values of integer
        Ugo.prototype.evenArray = function (obj) {
            const resultEven = [];
          obj.forEach(n => {
            if(n % 2 === 0){
                resultEven.push(n);
            }
          })
            return resultEven;
        };
        // Odd array values of integer
        Ugo.prototype.oddArray = function (obj) {
            const resultOdd = obj.filter(n => {
              return n % 2 != 0;
            })
              return resultOdd;
          };
        // Exponential values of integer
        Ugo.prototype.exponent = function (a, b){
            let e = 1;
            for(let i = 1; i <= b; i++) {
                e *= a;
            }
            return e;
        };
        //Power values of integer
        Ugo.prototype.power = function (b, e){
            return e == 0? 1 : b * this.power(b, --e);
        };
        // Mean of array integer
        Ugo.prototype.meanArray = function (n){
            const sum = n.reduce((a, b) => a + b) 
            const avg = sum / n.length;
            return avg;   
        };
        // Median of array integer
        Ugo.prototype.medianArray = function (n){
            const { length } = n;
            n.sort((c, d) => c - d);
            if(length % 2 === 0){
                return (n[length / 2 -1] + n[length / 2 ]) / 2;
            }
            return n[(length - 1) / 2];
        };
        // Mode of array integer
        Ugo.prototype.modeArray = function (n){
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
        // Range of array integer
        Ugo.prototype.rangeArray = function (n){
            n.sort((c, d) => c - d);
            return [n[0], n[n.length - 1]];
        };

    export default Ugo;
