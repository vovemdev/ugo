// Object Oriented Programming (OOP)
// Function with prototype
// Mathematical calculation

// Ugo which can mean 'heart', 'mind' or 'spirit'

// Constructor function
function ugo (){ 
    this.sum = 0;
    this.lenght = 0;
    }
    // Addition values of integer
    ugo.prototype.add = function (obj) {
    obj.forEach(function count(e){
        this.sum += e;
        ++this.length;

    },this);
    };
     // Subtraction values of integer
     ugo.prototype.subtract = function (a, b) {
    return a-b;
    } 
    // Multiplication values of integer
    ugo.prototype.multiple = function (a, b) {
    return a*b;
     } 
    // Division values of integer
    ugo.prototype.divide = function (a, b) {
    return a/b;
    }
    // Flatten
    ugo.prototype.flatten = function flat (obj) {
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

    export default ugo;
