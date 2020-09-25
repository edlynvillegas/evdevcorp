import { useState, useEffect, useCallback } from 'react'
// Custom Hooks
import useEventListener from './useEventListener'

const initial_spec = {
    height: 0, width: 0, top: 0, bottom: 0, direction: 'down'
}

export default function useWindowScroll() {
    const [scroll, setScroll] = useState(initial_spec)

    useEffect(() => {
        // console.log('useWindowScroll')
        scrollListener()
        // eslint-disable-next-line
    }, [])
    
    const scrollListener = useCallback(() => {
        setTimeout(() => {
            const rect = document.body.getBoundingClientRect();
            setScroll(prev => ({
                height: window.innerHeight,
                width: window.innerWidth,
                top: Math.abs(rect.top),
                bottom: rect.bottom,
                direction: prev.top > Math.abs(rect.top) ? 'up' : 'down'
            }))
        }, 100);
        // eslint-disable-next-line
    }, [scroll])

    useEventListener('scroll', scrollListener)

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollListener)
    //     scrollListener()
    //     return () => window.removeEventListener('scroll', scrollListener)
    //     // eslint-disable-next-line
    // }, [])

    return { ...scroll }
}