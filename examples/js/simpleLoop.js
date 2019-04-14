function setup() {
    createCanvas(300, 300)
    fill(0)
    //lower framerate = smaller files
    frameRate(30)
    //setting duration to 3 seconds (30fps * 3 seconds will be 90 frames)
    createLoop(3, { gif: { fileName: "simpleLoop.gif" } })
}

function draw() {
    background(255)
    translate(width / 2, height / 2)
    const radius = height / 3
    const x = cos(animLoop.theta) * radius
    const y = sin(animLoop.theta) * radius
    ellipse(x, y, 50, 50)
}