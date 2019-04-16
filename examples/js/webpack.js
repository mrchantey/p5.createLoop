const p5 = require('p5');
require('p5.createloop');

new p5(p => {

    p.setup = _ => {
        p.createCanvas(300, 300)
        p.colorMode(p.RGB, 1)
        // p.frameRate(20)
        p.fill(0)
        p.createLoop({ gif: { fileName: "webpack.gif" } })
    }

    p.draw = _ => {
        p.background(Math.sin(p.animLoop.theta) * 0.5 + 0.5)
        p.translate(p.width / 2, p.height / 2)
        p.ellipse(0, 0, 50)
    }
})