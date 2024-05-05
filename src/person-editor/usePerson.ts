import { useState, useEffect, useCallback } from 'react';
import localforage from 'localforage';

import type { Person } from '../types/person';
// import { useDebounce } from '../hooks/useDebounce';
import { useWillUnmounts } from '../hooks/useWillUnmounts';
import { useThrottle } from '../hooks/useThrottle';
// import { sleep } from '../utils/sleep';

function savePerson(person: Person | null) {
    console.log('Saving person', person);
    localforage.setItem('person', person);
}

export function usePerson(initialPerson: Person) {
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        const getPerson = async () => {
            const person = await localforage.getItem<Person>('person');
            // await sleep(2000);
            setPerson(person ?? initialPerson);
        }
        getPerson();
    },[initialPerson])

    const [,setNow] = useState(new Date());

    useEffect(() => {
        const handle = setInterval(() => {
            setNow(new Date())
        },500)
        return () => clearInterval(handle);
    },[])

    const saveFn = useCallback(() => {
        savePerson(person);
    },[person])

    useThrottle(saveFn, 1000);
    useWillUnmounts(saveFn);

    return [person, setPerson] as const;
}

