window.addEventListener('load', _ => {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    const loop = createLoop({
        duration: 5,
        framesPerSecond: 30,
        gif: true,
        canvas
    })

    loop.start(render)

    function render() {
        const hw = canvas.width / 2
        const hh = canvas.height / 2
        const grd = ctx.createRadialGradient(hw, hh, 0, hw, hh, hh)
        grd.addColorStop(0, `hsl(${loop.progress * 360},100%,50%)`)
        grd.addColorStop(1, `white`)
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        //post render must be called to add GIF frames
    }
})