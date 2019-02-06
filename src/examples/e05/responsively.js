class Responsively {
    constructor() {
        // default values
        this.breakpointValues = {
            xs: { min: '0em', width: '100%' },
            sm: { min: '48em', width: '49rem' },
            md: { min: '64em', width: '65rem' },
            lg: { min: '75em', width: '76rem' },
        }
    }

    configureBreakpoints(breakpointValues) {
        Object.keys(breakpointValues).forEach(key => {
            return (breakpointValues[key] = { ...breakpointValues[key], id: key })
        })
        this.breakpointValues = breakpointValues
    }

    getBreakpointValues() {
        return this.breakpointValues
    }

    getBreakpointKeys() {
        return Object.keys(this.breakpointValues)
    }

    // helper

    mediaMap(func) {
        let out = ''
        Object.keys(this.breakpointValues).forEach(key => {
            const elem = this.breakpointValues[key]
            out += `@media only screen and (min-width: ${elem['min']}) {
                ${func(elem)}
            }
            `
        })
        return out
    }

    helperMediaMap(breakpoints, func) {
        let out = ''
        Object.keys(breakpoints).forEach(key => {
            const elem = breakpoints[key]
            out += `@media only screen and (min-width: ${elem['min']}) {
                ${func(elem)}
            }
            `
        })
        return out
    }

    destructionProp(props) {
        const k = {}
        this.getBreakpointKeys().forEach(breakpoint => {
            if (props[breakpoint] !== undefined) {
                k[breakpoint] = props[breakpoint]
            }
        })
        return k
    }

    // mixins

    mixins = {
        width: function(value) {
            if (typeof value === 'number') {
                if (value >= 0 && value <= 1) {
                    return (value * 100).toFixed(2) + '%'
                } else {
                    return value + 'px'
                }
            }

            const n = parseInt(value)

            if (n >= 1 && n <= 12) {
                return 100 / (12 / value) + '%'
            }

            return value
        },
    }
}

export default new Responsively()
