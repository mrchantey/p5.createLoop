

const seed1 = Math.random()
const seed2 = Math.random()
const freq1 = 0.5
const freq2 = 1
let amp1
let amp2


function setup() {
    createCanvas(window.innerWidth, window.innerHeight / 2)
    frameRate(30)
    background(0)
    fill(127)
    createLoop(3)
    amp1 = height / 3
    amp2 = height / 3
}

function draw() {
    background(0)
    translate(width / 2, height / 2)
    animLoop.noiseSeed(seed1)
    animLoop.noiseFrequency(freq1)
    const x = animLoop.noise() * amp1
    animLoop.noiseSeed(seed2)
    animLoop.noiseFrequency(freq2)
    const y = animLoop.noise() * amp2

    ellipse(x, y, 20, 20)
}