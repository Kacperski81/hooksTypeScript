import { useState, useEffect } from 'react';
import localforage from 'localforage';

import type { Person } from '../types/person';
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

    useEffect(() => {
        savePerson(person);
    },[person])

    return [person, setPerson] as const;
}

