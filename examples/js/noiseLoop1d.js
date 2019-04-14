function setup() {
    createCanvas(window.innerWidth - 50, window.innerHeight / 2 - 50)
    frameRate(30)
    background(0)
    fill(127)
    stroke(127)
    createLoop()
    animLoop.noiseFrequency(0.01)
}

function draw() {
    background(0)
    translate(0, height / 2)
    const distributionFrequency = 0.01
    for (let x = 0; x < width; x++) {
        const y = animLoop.noise1D(x * distributionFrequency)
        ellipse(x, y, 5)
    }
}