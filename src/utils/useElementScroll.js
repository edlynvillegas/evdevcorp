import { useState, useEffect, useRef } from 'react'
// Custom Hooks
import useWindowScroll from './useWindowScroll'

const initialState = {
    isVisible: false,
    isPassed: false
}

export default function useElementScroll(el) {
    const [elScroll, setElScroll] = useState(initialState)
    const { height, top } = useWindowScroll()
    const elOffset = useRef(null)

    // useEffect(() => {
    //     console.log('^^^', top)
    // }, [top])

    useEffect(() => {
        if (el) {
            elOffset.current = {
                top: el.offsetTop,
                height: el.offsetHeight
            }
        }
        return () => elOffset.current = null
        // eslint-disable-next-line
    }, [el])

    useEffect(() => {
        // console.log('^^^', top + height, elOffset.current)
        if (el && (top + height) >= elOffset.current.top && top <= (elOffset.current.top + elOffset.current.height)) {
            setElScroll({
                isVisible: true,
                isPassed: true
            })
        } else {
            setElScroll(prev => ({
                isVisible: false,
                isPassed: prev.isPassed ? prev.isPassed : false
            }))
        }
        return () => setElScroll(initialState)
        // eslint-disable-next-line
    }, [el, top, height])

    return { ...elScroll }
}