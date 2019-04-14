new p5(p => {

    p.setup = _ => {
        p.createCanvas(400, 400)
        p.frameRate(20)
        p.fill(0)
        p.createLoop()
    }

    p.draw = _ => {
        p.background(255)
        p.translate(p.width / 2, p.height / 2)
        const radius = 100
        const x = Math.cos(p.animLoop.theta) * radius
        const y = Math.sin(p.animLoop.theta) * radius
        p.ellipse(x, y, 50, 50)
    }
})