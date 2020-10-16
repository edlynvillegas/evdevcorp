import useEventListener from './useEventListener'
import { useCallback, useEffect, useReducer } from 'react'

const reducer = (state, width) => {
    if (width >= 0 && width <= 576) {
        return 'mobile'
    } else if (width > 576 && width <= 1024) {
        return 'tablet'
    } else if (width > 1024 && width <= 1440) {
        return 'laptop'
    }  else if (width > 1440) {
        return 'desktop'
    } else {
        return null
    }
}

export default function useBreakpoints() {
    const [device, setDevice] = useReducer(reducer, null)

    const resizeListener = useCallback(() => {
        setDevice(window.outerWidth)
    }, [])

    useEffect(() => {
        resizeListener()
        // eslint-disable-next-line
    }, [])

    useEventListener('resize', resizeListener)

    return device;
}