/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

//Power values of integer
module.exports = function power (b, e){
    return e == 0? 1 : b * this.power(b, --e);
};