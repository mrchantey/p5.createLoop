const event = require('./event');

"use strict"
module.exports = animationLoop

//internal script
function animationLoop({
    framesPerSecond,
    duration,
    loop
} = {}) {

    const onLoop = event()
    const onPostRender = event()
    const onPreRender = event()

    onPreRender.addListener(updateLoopInfo)
    const framesPerLoop = Math.floor(duration * framesPerSecond)
    const frameDeltaTime = (1 / framesPerSecond) * 1000

    Object.assign(loop, {
        start,
        onLoop,
        onPreRender,
        onPostRender,
        preRender: _ => onPreRender.invoke(),
        postRender: _ => onPostRender.invoke(),
        animationFrame: _ => onAnimationFrame.invoke(),
        get framesPerLoop() { return framesPerLoop },
        get framesPerSecond() { return framesPerSecond },
        // get duration() { return duration },
        get frameDeltaTime() { return frameDeltaTime },
        elapsedFrames: -1,
        elapsedFramesTotal: -1,
        elapsedLoops: -1,
        progress: undefined,
        theta: undefined
    })


    function start(renderCallback) {
        let startTime = Date.now()
        onAnimationFrame()
        function onAnimationFrame() {
            let nextFrameTime = loop.elapsedFramesTotal * loop.frameDeltaTime
            let dt = Date.now() - startTime
            if (dt >= nextFrameTime)
                onLoopFrame()
            requestAnimationFrame(onAnimationFrame)
        }

        function onLoopFrame() {
            onPreRender.invoke()
            renderCallback()
            onPostRender.invoke()
        }
    }

    function updateLoopInfo() {
        loop.elapsedFrames++
        loop.elapsedFramesTotal++
        if (loop.elapsedFrames % loop.framesPerLoop === 0) {
            loop.elapsedFrames = 0
            loop.elapsedLoops++
            loop.progress = loop.elapsedFrames / loop.framesPerLoop
            loop.theta = (loop.progress * Math.PI * 2)
            // console.log(`on loop ${loop.elapsedLoops}`);
            onLoop.invoke()
        } else {
            loop.progress = loop.elapsedFrames / loop.framesPerLoop
            loop.theta = (loop.progress * Math.PI * 2)
        }
        // console.log(`on frame ${loop.elapsedFrames}, loop ${loop.elapsedLoops}`);
    }
}