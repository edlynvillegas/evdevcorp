import { useEffect, useRef } from 'react';

export default function useDebounce(callback, delay) {
    const timeoutRef = useRef();
    const callbackRef = useRef(callback);
  
    // Remember the latest callback:
    //
    // Without this, if you change the callback, when setTimeout kicks in, it
    // will still call your old callback.
    //
    // If you add `callback` to useEffect's deps, it will work fine but the
    // timeout will be reset.
  
    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);
  
    // Set up the timeout:
  
    useEffect(() => {
      if (typeof delay === 'number') {
        timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
  
        // Clear timeout if the components is unmounted or the delay changes:
        return () => window.clearTimeout(timeoutRef.current);
      }
    }, [delay]);
  
    // In case you want to manually clear the timeout from the consuming component...:
    return timeoutRef;
  }