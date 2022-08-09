"use strict"
const SimplexNoise = require('simplex-noise');
module.exports = noiseLoop

const SEED_MULTIPLIER = 999999

function noiseLoop(loop, options = {}) {
    options = Object.assign({
        frequency: undefined,//depreceated
        seed: Math.random() * SEED_MULTIPLIER,
        radius: 1,
    }, options)

    // const instances = []
    // let currentInstance
    const simplexNoise = new SimplexNoise(0)

    // setNoiseSeed(seed)//to deprecate
    if (options.frequency !== undefined)
        options.radius = options.frequency

    Object.assign(loop, {
        noiseFrequency: val => options.radius = val,//deprecate
        noise,
        noise1D,
        noise2D,
        noiseSeed: val => options.seed = val,
        noiseRadius: val => options.radius = val
    })

    function noise({ theta = loop.theta, radius = options.radius, seed = options.seed } = {}) {
        const cart = polarToCartesian(theta, radius)
        return simplexNoise.noise2D(seed + cart.x, seed + cart.y)
    }

    function noise1D(x, { theta = loop.theta, radius = options.radius, seed = options.seed } = {}) {
        const cart = polarToCartesian(theta, radius)
        return simplexNoise.noise3D(seed + cart.x, seed + cart.y, seed + x)
    }

    function noise2D(x, y, { theta = loop.theta, radius = options.radius, seed = options.seed } = {}) {
        const cart = polarToCartesian(theta, radius)
        return simplexNoise.noise4D(seed + cart.x, seed + cart.y, seed + x, seed + y)
    }

    // function setNoiseSeed(newSeed) {
    //     currentInstance = instances.find(i => i.seed === newSeed)
    //     if (currentInstance === undefined) {
    //         currentInstance = {
    //             seed: newSeed,
    //             simplex: new SimplexNoise(newSeed)
    //         }
    //         instances.push(currentInstance)
    //     }
    // }
}

function polarToCartesian(theta, radius) {
    return {
        x: Math.cos(theta) * radius,
        y: Math.sin(theta) * radius
    }
}