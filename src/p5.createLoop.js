require('createLoop');
const event = require('./event');

module.exports = attachCreateLoop
function attachCreateLoop() {
    console.log('p5 detected, attaching createLoop');
    const onInit = event()
    const onPreRender = event()
    const onPostRender = event()

    p5.prototype.registerMethod('init', onInit.invoke)
    p5.prototype.registerMethod('pre', onPreRender.invoke)
    p5.prototype.registerMethod('post', onPostRender.invoke)

    const createLoop = window.createLoop
    p5.prototype.createLoop = function (options = {}, options2 = {}) {
        const sketch = this
        console.log(`creating loop with frame rate ${sketch._targetFrameRate}`);
        const loopOptions = {
            framesPerSecond: sketch._targetFrameRate,
            canvas: sketch.canvas
        }
        if (options !== undefined && isNaN(options))
            Object.assign(loopOptions, options)
        if (!isNaN(options))
            loopOptions.duration = options
        if (options2 !== undefined)
            Object.assign(loopOptions, options2)

        sketch.animLoop = createLoop(loopOptions)
        if (sketch._isGlobal)
            window.animLoop = sketch.animLoop
        onPreRender.addListener(sketch.animLoop.preRender)
        onPostRender.addListener(sketch.animLoop.postRender)
    }
}