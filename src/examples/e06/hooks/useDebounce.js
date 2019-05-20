import { useState, useEffect, useCallback, useRef } from 'react'

export const useDebounceCallback = (fn, delay, deps = []) => {
    const functionTimeoutHandler = useRef(null)
    const debouncedFunction = useCallback(fn, deps)

    const cancelDebounce = useCallback(() => {
        clearTimeout(functionTimeoutHandler.current)
        functionTimeoutHandler.current = null
    }, [])

    const debouncedCallback = useCallback(
        (...args) => {
            clearTimeout(functionTimeoutHandler.current)
            functionTimeoutHandler.current = setTimeout(() => {
                debouncedFunction(...args)
                cancelDebounce()
            }, delay)
        },
        [cancelDebounce, debouncedFunction, delay]
    )

    return [debouncedCallback, cancelDebounce]
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    const [debouncedCallback, cancel] = useDebounceCallback(
        value => {
            setDebouncedValue(value)
        },
        delay,
        [value]
    )

    useEffect(() => {
        if (debouncedValue !== value) {
            debouncedCallback(value)
        }
    })

    return [debouncedValue, cancel]
}
