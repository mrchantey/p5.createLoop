module.exports = event

function event() {
    const listeners = []
    return {
        _listeners: listeners,
        addListener: (l => {
            const found = listeners.find(l2 => l === l2)
            if (found === undefined)
                listeners.push(l)
            else
                console.log(`listener already in event: ${l}`);
        }),
        removeListener: (l => {
            const found = listeners.find(l2 => l === l2)
            if (found !== undefined)
                listeners.splice(listeners.indexOf(l), 1)
            else
                console.log(`listener not found: ${l}`);
        }),
        invoke: (args => listeners.forEach(l => l(args)))
    }
}