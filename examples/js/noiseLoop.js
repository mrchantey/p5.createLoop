function setup() {
    createCanvas(400, 400)
    frameRate(30)
    createLoop()
    animLoop.frequency(0.5)
    gifLoop.noise.frequency = 0.5
}

function draw() {
    background(255)
    translate(width / 2, height / 2)
    const y = animLoop.noise() * height / 4
    ellipse(0, y, 50, 50)
}