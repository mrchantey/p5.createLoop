// require('createLoop');
const createLoopFunc = require('./createLoop');
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

	if(p5.prototype.registerMethod){
		// p5.js 1.x lifecycle hooks
		p5.prototype.registerMethod('init', onInit.invoke)
		p5.prototype.registerMethod('pre', onPreRender.invoke)
		p5.prototype.registerMethod('post', onPostRender.invoke)
	}else{
		// p5.js 2.0 lifecycle hooks
		p5.registerAddon(function(p5, fn, lifecycles){
			lifecycles.presetup = onInit.invoke;
			lifecycles.predraw = onPreRender.invoke;
			lifecycles.postdraw = onPostRender.invoke;
		});
	}

	// const createLoopFunc = window.createLoop

	//most of this function is enabling ease of use in a 'p5 friendly' way
	p5.prototype.createLoop = function(options = {}, options2 = {}) {
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
		// sketch.animLoop = createLoopFunc(loopOptions)
		createLoopFunc(loopOptions, sketch.animLoop);
		// if (sketch._isGlobal)
		// 	window.animLoop = sketch.animLoop
		onPreRender.addListener(sketch.animLoop.preRender)
		onPostRender.addListener(sketch.animLoop.postRender)
		// return sketch.animLoop
	}

	p5.prototype.animLoop = {};
}

