# p5.createLoop

Create animation loops with noise and GIF exports in one line of code. This library is a lightweight wrapper of [createLoop](https://www.npmjs.com/package/createloop).

Features include:
- GIF image rendering
- noise loops

<!-- **Ye be warned** This is a baby library and has a lot of growing up to do. Bugs and breaking changes ahoy. -->

## Example

![p5 simple example](examples/images_compressed/simpleLoop.gif)

html:
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js"></script>
    <script src="https://unpkg.com/p5.createloop@0.0.20/dist/p5.createloop.js"></script>
```

javascript:
```js
function setup() {
    createCanvas(400, 400)
    fill(0)
    frameRate(30)
    createLoop({duration:3, gif:true})
}

function draw() {
    background(255)
    translate(width / 2, height / 2)
    const radius = height / 3
    const x = cos(animLoop.theta) * radius
    const y = sin(animLoop.theta) * radius
    ellipse(x, y, 50, 50)
}

```

## More examples

### [Noise Loop](examples/js/noiseLoop.js)

- Begins recording the GIF after the first loop
- y pos is `animLoop.noise()`
- x pos is cosine of `animLoop.theta`

![Noise Loop Example](examples/images_compressed/noiseLoop.gif)

### [Noise Loop 2x](examples/js/noiseLoop2x.js)

- two noise seeds, one for x and one for y

![Noise Loop 2x Example](examples/images/noiseLoop2x.gif)

### [Noise Loop 1D](examples/js/noiseLoop1d.js)

- a noise value for each x position

![Noise Loop 1D Example](examples/images_compressed/noiseLoop1d.gif)

### [Noise Loop 2D](examples/js/noiseLoop2d.js)

- a noise value for each x and y position

![Noise Loop 2D Example](examples/images_compressed/noiseLoop2d.gif)

### 
<!-- - also works in instance mode -->

<!-- ![Instance Mode Example](examples/images_compressed/instanceMode.gif) -->




## Documentation

p5.createLoop works to make creating animation loops feel native to p5.
 When a sketch is initialized the following are attatched to it:
- [createLoop()](README.md#createLoop())
  - a function to be called in `setup()`
- [animLoop](README.md#animLoop)
  - an object containing helpful properties and methods for `draw()` 

(this also works in )

### createLoop()

This function can be called in two ways:
```javascript
createLoop(options)
createLoop(duration,options)
```

| Name              | Default   | Description                                                                                              |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| `duration`        | `3`       | sets the duration in seconds of the loop.                                                                |
| `framesPerSecond` | `30`      | approximate fps of the loop. This is the same as calling `frameRate()`                                   |
| `noise`           | `options` | See [noise options](README.md#noise-options)                                                             |
| `gif`             | `false`   | can also accept `true` or `options` to be passed to GIF module. See [gif options](README.md#gif-options) |

Options can be passed as an object:
```js
createLoop({
    noise:{
        radius:3,
        seed:99
    }
})
```
or as camelCase:
```js
createLoop({
        noiseRadius:3,
        noiseSeed:99
    })
```

#### noise options
These can be passed in `createLoop` and also overridden each time `animLoop.noise()` is called. See this [Coding Train explanation](https://youtu.be/ZI1dmHv3MeM) of how noise loops work.

| Name     | Default           | Description                                                                                              |
| -------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| `radius` | `1`               | radius of the circle in a noise field to query. Similar to the concept of `frequency`                    |
| `seed`   | `random(0,99999)` | noise field offset                                                                                       |
| `theta`  | `animLoop.theta`  | By defalt is angular progress of the loop. This can be set in `animLoop.noise()` but not in `createLoop` |


#### gif options
some notes on making GIF images:
- The built in p5 `frameRate()` function will also set the delay between GIF frames
- The GIF encoder [gif.js](https://github.com/jnordberg/gif.js) uses web workers to render the GIF asynchronously 

| Name        | Default     | Description                                                                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `render`    | `true`      | render the GIF image alongside the sketch. Clicking on the image will begin downloading the GIF                         |
| `open`      | `false`     | open the gif image in a new tab or window                                                                               |
| `download`  | `false`     | download the gif automatically                                                                                          |
| `fileName`  | `image.gif` | name of the downloaded GIF file                                                                                         |
| `startLoop` | `0`         | loop index to begin recording the GIF. see [Noise Loop](examples/js/noiseLoop.js) example                               |
| `endLoop`   | `1`         | loop index to end recording the GIF                                                                                     |
| `canvas`    | `<canvas>`  | the canvas to render. By default this is the sketch canvas                                                              |
| `options`   | `{}`        | options to pass to gif.js encoder. see [gif.js documentation](https://github.com/jnordberg/gif.js#user-content-options) |

### animLoop

Because the aim here is to get loopin asap, this object provides some valuable properties and methods for animating loops. See documentation on [Loop Instance](https://github.com/piratesjustar/createLoop#loop-instance) for further details.

| Name                   | Description                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `progress`             | linear progress of the loop with a range of `0 to 1`                                   |
| `theta`                | angular progress of the loop in radians with range `0 to TWO_PI`                       |
| `noise(options)`       | returns a noise value between -1 and 1. See [noise options](README.md#noise-options)   |
| `noise1D(x,options)`   | Same as above also accepting an `x` value, providing a 1D line of noise for each frame |
| `noise2D(x,y,options)` | Same as above also accepting a `y` value, providing a 2D plane of noise                |
| `noiseSeed()`          | set the noise seed. See [noise options](README.md#noise-options)                       |
| `noiseRadius()`        | set the noise radius. See [noise options](README.md#noise-options)                     |

### Contributions

Climb aboard! Make an issue or pull request on the [gitHub page](https://github.com/piratesjustar/p5.createLoop)

### To do

- add easing functions
- set GIF size to reflect pixel density

### patch notes
- 0.0.21 - 15/04/2019
    - createLoop returns the animLoop object
    - README script tags reflect version
- 0.0.18 - 15/04/2019
    - updated to createLoop 0.0.7
- 0.0.17 - 15/04/2019
    - updated to createLoop 0.0.6
- 0.0.16 - 15/04/2019
    - can handle webpack without adding p5 to global namespace
- 0.0.15 - 15/04/2019
    - p5 must be externally required
- 0.0.12 - 15/04/2019
    - remove full size images from package
- 0.0.11 - 15/04/2019
    - removed p5 from bundle
    - where p5._targetFrameRate is undefined, uses p5._frameRate instead
- 0.0.10 - 15/04/2019
    - enabled use as a package
    - added p5 as dependency
- 0.0.6 - 15/04/2019
    - compressed example images
- 0.0.4 - 14/04/2019
    - fixed README image bug
- 0.0.2 - 14/04/2019
    - using script tags in examples
- 0.0.1 - 14/04/2019
    - initial release