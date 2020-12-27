new p5(p => {

	p.setup = _ => {
		p.createCanvas(300, 300)
		p.colorMode(p.RGB, 1)
		// p.frameRate(20)
		p.fill(0)
		p.createLoop({ noiseRadius: 0.1, gif: { fileName: "instanceMode.gif" } })
	}

	p.draw = _ => {
		// p.background(Math.sin(p.animLoop.theta) * 0.5 + 0.5)
		const n = p.noise()
		// console.log(n);
		p.background(p.animLoop.noise() * 0.5 + 0.5)
		p.translate(p.width / 2, p.height / 2)
		const radius = 100
		p.ellipse(0, 0, 50, 50)
	}
})