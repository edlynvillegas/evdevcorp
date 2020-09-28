import { useRef, useEffect, useCallback } from 'react';

export default function useTimeout(handler, ms = 1000, open = true, direction) {
    const timeout = useRef();

    const clear = useCallback(() => {
        timeout.current && clearTimeout(timeout.current);
    }, []);
    
    const set = useCallback(() => {
        timeout.current = open && setTimeout(() => handler(), ms);
    }, [ms, handler, open]);

    useEffect(() => {
        set();
        return clear;
    }, [handler, ms, open, clear, set]);

    return { clear, reset: set };
}