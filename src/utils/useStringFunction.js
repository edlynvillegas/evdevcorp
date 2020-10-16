import { useCallback } from 'react'

export default function useStringFunction() {

    const uppercaseStr = useCallback((string, index) => {
        if (!string) return null;
        // console.log('index', index)
        if (index < 0) {
            return string.toUpperCase() // all
        } else {
            console.log(string.split("").map((a, i) => i===index ? a.toUpperCase() : a).join(""))
            return string.split("").map((a, i) => i===index ? a.toUpperCase() : a).join("") // index
        }
    }, [])

    const trimStr = useCallback((string, limit, start = 0) => {
        if (!string) return null;

        if (!limit) {
            if (start) return string.substr(start, string.length)
            return string;
        }
        
        return string.substr(start, limit)
    }, [])

    return { uppercaseStr, trimStr }
}