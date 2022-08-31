/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

require('../utils/base-each');

// Addition values of integer
module.exports = function add (obj) {
    obj.baseEach((e) => {
        this.sum += e;
        ++this.length;
    },this);
    };