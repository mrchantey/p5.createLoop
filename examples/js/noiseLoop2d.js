function setup() {
    createCanvas(window.innerWidth / 2 - 50, window.innerHeight / 2 - 50)
    frameRate(30)
    background(0)
    fill(127)
    stroke(127)
    createLoop()
    animLoop.noiseFrequency(0.1)
    colorMode(HSB, 1)
}

function draw() {
    background(0)
    translate(0, height / 2)
    const density = 0.05
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const z = animLoop.noise2D(x * density, y * density) * 0.5 + 0.5
            set(x, y, color(z, 1, 1))
        }
    }
    updatePixels()
}