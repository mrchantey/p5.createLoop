// require('createloop');
if (typeof p5 !== typeof undefined) {
    require('./p5.createLoop')();
} else {
    console.warn('p5 not found');
}