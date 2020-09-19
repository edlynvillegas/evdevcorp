// import { useState } from 'react';

export default function useClassNames(name) {

    const merge = () => {
        return `Hey ${name}!`;
    }
    return {
        merge
    };
}