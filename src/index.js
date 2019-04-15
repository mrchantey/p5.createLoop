// require('createloop');
if (typeof p5 !== typeof undefined) {
    // console.log("p5.createLoop: p5 script found");
    init()
} else {
    window.p5 = require('p5');
    if (typeof p5 !== typeof undefined) {
        // console.log("p5.createLoop: p5 package found");
        init()
    }
    else
        console.warn('p5.createLoop: p5 not found');
}

function init() {
    require('./p5.createLoop')();
}