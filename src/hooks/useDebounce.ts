import { useDebugValue, useEffect } from 'react';

export function useDebounce(fn: () => void, timeout: number) {
    useDebugValue('debounce')
    
    useEffect(() => {
        const handle = setTimeout(fn, timeout);

        return () => clearTimeout(handle);
    },[fn, timeout])
}