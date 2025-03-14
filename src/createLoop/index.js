const createLoop = require('./createLoop');
module.exports = createLoop;
// (function (f) {
//     // if (typeof exports === "object" && typeof module !== "undefined") {

//     //     module.exports = require('./createLoop')
//     // } else if (typeof define === "function" && define.amd) {
//     //     define([], f)
//     // } else {
//     const g = getGlobal()
//     // g.GIF = f()
//     // }
// })()

// function getGlobal() {
//     if (typeof window !== "undefined")
//         return window
//     if (typeof global !== "undefined")
//         return global
//     if (typeof self !== "undefined")
//         return self
//     return this
// }