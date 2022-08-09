require('createLoop');
const event = require('./event');

module.exports = attachCreateLoop
function attachCreateLoop() {
	let p5 = typeof window.p5 === typeof undefined ? require('p5') : window.p5
	if (typeof p5 === typeof undefined) {
		console.error('p5.createLoop: p5 not found');
		return
	}
	const onInit = event()
	const onPreRender = event()
	const onPostRender = event()

	p5.prototype.registerMethod('init', onInit.invoke)
	p5.prototype.registerMethod('pre', onPreRender.invoke)
	p5.prototype.registerMethod('post', onPostRender.invoke)

	const createLoopFunc = window.createLoop


	//most of this function is enabling ease of use in a 'p5 friendly' way
	function instanceCreateLoop(options = {}, options2 = {}) {
		const sketch = this
		const loopOptions = {
			framesPerSecond: sketch._targetFrameRate || sketch._frameRate || 60,
			duration: 3,
			canvas: sketch.canvas
		}

		// console.log();
		if (options !== undefined && isNaN(options))
			Object.assign(loopOptions, options)
		if (!isNaN(options))
			loopOptions.duration = options
		if (options2 !== undefined)
			Object.assign(loopOptions, options2)

		console.log(`creating ${loopOptions.duration} second loop at ${loopOptions.framesPerSecond} fps`);
		sketch.animLoop = createLoopFunc(loopOptions)
		if (sketch._isGlobal)
			window.animLoop = sketch.animLoop
		onPreRender.addListener(sketch.animLoop.preRender)
		onPostRender.addListener(sketch.animLoop.postRender)
		return sketch.animLoop
	}



	//I need to know whether global or local before calling setup function
	//but after initialization
	p5.prototype.registerMethod('init', function () {
		var superSetup = this._setup
		this._setup = _ => {
			if (this._isGlobal) {
				window.createLoop = instanceCreateLoop
			} else {
				this.createLoop = instanceCreateLoop
			}
			superSetup()
		}
	})
}

