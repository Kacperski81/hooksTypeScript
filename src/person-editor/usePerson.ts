import { useMemo, useEffect, useCallback, useReducer } from 'react';
import localforage from 'localforage';

import type { Person } from '../types/person';
// import { useDebounce } from '../hooks/useDebounce';
import { useWillUnmounts } from '../hooks/useWillUnmounts';
import { useThrottle } from '../hooks/useThrottle';
import { useIsMounted } from '../hooks/useIsMounted';
import { personEditorReducer } from './personEditorReducer';
// import { sleep } from '../utils/sleep';

function savePerson(person: Person | null) {
    console.log('Saving person', person);
    localforage.setItem('person', person);
}

// interface Metadata {
//     isDirty: boolean;
//     isValid: boolean;
// }

export function usePerson(initialPerson: Person) {
    // const [person, setPerson] = useState<Person | null>(null);
    // const [ metadata, setMetadata ] = useState<Metadata>({
    //     isDirty: false,
    //     isValid: true
    // })
    const [{person,metadata}, dispatch]  = useReducer(personEditorReducer, {
        person: null,
        metadata: {
            isDirty: false,
            isValid: true
        }
    })

    const isMounted = useIsMounted();

    const fristAndSurname = useMemo(() => ({
        firstname: person?.firstname,
        surname: person?.surname,
    }), [person?.firstname, person?.surname])

    useEffect(() => {
        console.log("first and surname", fristAndSurname)
    }, [fristAndSurname])

    useEffect(() => {
        const getPerson = async () => {
            const person = await localforage.getItem<Person>('person');
            // await sleep(2000);
            if(isMounted.current) {
                dispatch({
                    type: 'set-initial-person',
                    payload: person ?? initialPerson
                })
            }
        }
        getPerson();
    },[initialPerson, isMounted])

    // const [,setNow] = useState(new Date());

    // useEffect(() => {
    //     const handle = setInterval(() => {
    //         setNow(new Date())
    //     },500)
    //     return () => clearInterval(handle);
    // },[])

    const saveFn = useCallback(() => {
        savePerson(person);
    },[person])

    useThrottle(saveFn, 1000);
    // useDebounce(saveFn, 1000);
    useWillUnmounts(saveFn);

    // const setPersonAndMeta = (value: SetStateAction<Person | null>) => {
    //     // setPerson(value);
    //     // setMetadata((m) => ({...m, isDirty: true}))
    // }

    function setProperty(name: keyof Person, value: unknown) {
        dispatch({
            type: 'set-property',
            payload: {name, value}
        })
    }

    function setProperties(payload: Partial<Person>) {
        dispatch({
            type: 'set-properties',
            payload
        })
    }

    return [person, setProperty, setProperties, metadata] as const;
}

