# Custom Animation Loop


If you need to be calling `requestAnimationFrame()` yourself or for some reason cannot render using the `start()` method, the below technique can be used.

```js


let loop = createLoop({framesPerSecond:10})

function start() {
    let startTime = Date.now()
    onAnimationFrame()
    function onAnimationFrame() {
        //The code to run every animation frame

        let nextFrameTime = loop.elapsedFramesTotal * loop.frameDeltaTime
        let dt = Date.now() - startTime
        if (dt >= nextFrameTime){ 
            loop.onPreRender.invoke()
            //do your rendering in here i.e
            ctx.fillRect(0,0,30,30)
            loop.onPostRender.invoke()
        }
        requestAnimationFrame(onAnimationFrame)
    }
}
```