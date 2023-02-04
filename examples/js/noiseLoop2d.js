function setup() {
    createCanvas(600, 300)
    frameRate(20)
    background(0)
    fill(127)
    stroke(127)
    createLoop(1, {
        gif: true,
        gifFileName: "noiseLoop2d.gif",
        noiseRadius: 0.1
    })
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