// window.p5 = require('p5');
if (typeof p5 !== typeof undefined)
    require('./p5.createLoop')();
else
    console.warn('p5.createLoop: p5 not found');