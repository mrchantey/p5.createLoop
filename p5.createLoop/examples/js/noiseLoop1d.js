function setup() {
    createCanvas(600, 300)
    frameRate(30)
    background(0)
    fill(127)
    stroke(127)
    createLoop({
        gif: { options: { repeat: -1 }, fileName: "noiseLoop1d.gif" },
        noiseRadius: 0.3
    })
}

function draw() {
    background(0)
    translate(0, height / 2)
    const distributionFrequency = 0.01
    for (let x = 0; x < width; x++) {
        const y = animLoop.noise1D(x * distributionFrequency) * height / 2
        ellipse(x, y, 5)
    }
}