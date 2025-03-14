const animationLoop = require('./animationLoop');
const noiseLoop = require('./noiseLoop');
const gifLoop = require('./gifLoop');

module.exports = createLoop

function createLoop({
    duration = 3,
    framesPerSecond = 30,
    gif = false,
    gifRender = undefined,
    gifOpen = undefined,
    gifDownload = undefined,
    gifStartLoop = undefined,
    gifEndLoop = undefined,
    gifFileName = undefined,
    gifOnFinishRender = undefined,
    gifOptions = undefined,    
    noise = {},
    noiseRadius = undefined,
    noiseSeed = undefined,
    canvas = undefined,
} = {}, loop = {}) {

    // console.log(canvas);

    // const loop = {}

    animationLoop({ framesPerSecond, duration, loop });


    if (noiseRadius !== undefined) noise.radius = noiseRadius
    if (noiseSeed !== undefined) noise.seed = noiseSeed
    noiseLoop(loop, noise)

    if (gif !== false) {
        gif = gif === true ? {} : gif
        if (canvas !== undefined) gif.canvas = canvas
        if (gifRender !== undefined) gif.render = gifRender
        if (gifOpen !== undefined) gif.open = gifOpen
        if (gifDownload !== undefined) gif.download = gifDownload
        if (gifStartLoop !== undefined) gif.startLoop = gifStartLoop
        if (gifOptions !== undefined) gif.options = gifOptions
        if (gifEndLoop !== undefined) gif.endLoop = gifEndLoop
        if (gifFileName !== undefined) gif.fileName = gifFileName
        if (gifOnFinishRender !== undefined) gif.onFinishRender = gifOnFinishRender
        gifLoop(loop, gif)
    }
    return loop
}