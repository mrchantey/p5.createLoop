

const seedX = Math.random()
const seedY = Math.random()
const radX = 0.7
const radY = 0.6
let ampX
let ampY

const gif = {
    startLoop: 1,
    endLoop: 2,
    fileName: "noiseLoop2x.gif"
}

function setup() {
    createCanvas(300, 300)
    colorMode(HSB, 1, 1, 1)
    frameRate(30)
    background(255)
    fill(127)
    noStroke()
    createLoop(3, { gif })
    ampX = width / 2.3
    ampY = height / 2.3
}

function draw() {
    // background(255)
    fill(animLoop.progress, 0.5, 1)
    translate(width / 2, height / 2)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY
    ellipse(x, y, 50, 50)
}