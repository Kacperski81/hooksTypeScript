import { useEffect, useRef } from "react";

export function useWillUnmounts(fn: () => void): void {
    const functionRef = useRef(fn);
    functionRef.current = fn;

    useEffect(() => {
        return () => functionRef.current();
    },[])
}