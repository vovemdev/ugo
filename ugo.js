// Object Oriented Programming (OOP)
// Function with prototype
// Mathematical calculation

// Ugo which can mean 'heart', 'mind' or 'spirit'

// Constructor function
function Ugo (){ 
    this.sum = 0;
    this.length = 0;
    }
    // Addition values of integer
    Ugo.prototype.add = function (obj) {
    obj.forEach(function count(e){
        this.sum += e;
        ++this.length;

    },this);
    };
     // Subtraction values of integer
     Ugo.prototype.subtract = function (a, b) {
    return a-b;
    } 
    // Multiplication values of integer
    Ugo.prototype.multiple = function (a, b) {
    return a*b;
     } 
    // Division values of integer
    Ugo.prototype.divide = function (a, b) {
    return a/b;
    }
    // modulus operation (remainder) values of integer
    Ugo.prototype.modulo = function mod (a, b){
        return ((a % b) + b) % b;
    }
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
        Ugo.prototype.evenArray = function even (obj) {
            const resultEven = [];
          obj.forEach(n => {
            if(n % 2 === 0){
                resultEven.push(n);
            }
          })
            return resultEven;
        };
        // Odd array values of integer
        Ugo.prototype.oddArray = function odd (obj) {
            const resultOdd = obj.filter(n => {
              return n % 2 != 0;
            })
              return resultOdd;
          };
        // Exponential values of integer
        Ugo.prototype.exponent = function expo (a, b){
            let e = 1;
            for(let i = 1; i <= b; i++) {
                e *= a;
            }
            return e;
        }
        //Power values of integer
        Ugo.prototype.power = function pow (b, e){
            return e == 0? 1 : b * this.power(b, --e);
        }

    export default Ugo;
