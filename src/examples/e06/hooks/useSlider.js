import { useEffect, useReducer } from 'react'

const initialValue = {
    length: 0,
    current: 0,
    isPause: false,
    isPlay: true,
}

const goto = (n, total) => {
    // (n) zero is the first
    const middle = n === total ? 0 : n < 0 ? total - 1 : n

    return {
        previous: middle - 1 < 0 ? total - 1 : middle - 1,
        current: middle,
        next: middle + 1 === total ? 0 : middle + 1,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'init':
            return { ...initialValue, length: action.payload }
        case 'goto':
            return {
                ...state,
                ...goto(action.to, state.length),
            }
        case 'next':
            return {
                ...state,
                ...goto(state.current + 1, state.length),
            }
        case 'previous':
            return {
                ...state,
                ...goto(state.current - 1, state.length),
            }
        case 'pause':
            return {
                ...state,
                isPause: true,
                isPlay: false,
            }
        case 'play':
            return {
                ...state,
                isPause: false,
                isPlay: true,
            }
        default:
            throw new Error('Type not found')
    }
}

const useSlider = (total, time) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    const pause = () => {
        dispatch({ type: 'pause' })
    }

    const play = () => {
        dispatch({ type: 'play' })
    }

    const goto = index => {
        dispatch({ type: 'goto', payload: index })
    }

    const gotoNext = () => {
        dispatch({ type: 'next' })
    }

    const gotoPrevious = () => {
        dispatch({ type: 'previous' })
    }

    useEffect(() => {
        let interval
        if (state.isPlay) {
            interval = setTimeout(() => {
                if (state.isPlay) gotoNext()
            }, time)
        }
        return () => {
            clearInterval(interval)
        }
    }, [state.current, state.isPause])

    useEffect(() => {
        let totalSafe = total
        if (Array.isArray(total)) totalSafe = total.length

        dispatch({ type: 'init', payload: totalSafe })
    }, [total])

    return { goto, gotoNext, gotoPrevious, pause, play, ...state }
}

export default useSlider
