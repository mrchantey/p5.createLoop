function setup() {
    createCanvas(300, 300)
    frameRate(30)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "noiseLoop.gif",
            startLoop: 1,
            endLoop: 2
        }
    })
    animLoop.noiseFrequency(0.4)
    background(255)
}

function draw() {
    translate(width / 2, height / 2)
    const x = cos(animLoop.theta) * width / 3
    const y = animLoop.noise() * height / 3
    ellipse(x, y, 50, 50)
}