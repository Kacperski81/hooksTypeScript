import { useState, useEffect, useContext } from 'react';
import { LabeledInput } from '../components'
import { initialPerson } from '../utils/InitialPerson';
import { Person } from '../types/person';
import localforage from 'localforage';
import { ThemeContext } from '../utils/themeContext';


function savePerson(person: Person | null): void {
    console.log("Saving person", person)
    localforage.setItem("person", person)
}

export function PersonEditor() {
    const [person, setPerson] = useState<Person | null>(null);
    const { fontFamily } = useContext(ThemeContext);

    useEffect(() => {
        const getPerson = async () => {
            const person = await localforage.getItem<Person>("person");
            setPerson(person ?? initialPerson)
        }
        getPerson()
    }, [])

    useEffect(() => {
        savePerson(person)
    }, [person])

    if (!person) return <div>Loading...</div>

    return (
        <section className="max-w-full">

            <form>

                <LabeledInput
                    fontFamily={fontFamily}
                    label="First Name"
                    value={person.firstname}
                    onChange={(e) => {
                        setPerson((person) => ({ ...person!, firstname: e.target.value }));
                    }}
                />

                <LabeledInput
                    fontFamily={fontFamily}
                    label="Surname"
                    value={person.surname}
                    onChange={(e) => {
                        setPerson((person) => ({ ...person!, surname: e.target.value }));
                    }}
                />

                <LabeledInput
                    fontFamily={fontFamily}
                    label="Email"
                    value={person.email}
                    onChange={(e) => {
                        setPerson((person) => ({ ...person!, email: e.target.value }));
                    }}
                />

                <LabeledInput
                    fontFamily={fontFamily}
                    label="Address"
                    value={person.address}
                    onChange={(e) => {
                        setPerson((person) => ({ ...person!, address: e.target.value }));
                    }}
                />

                <LabeledInput
                    fontFamily={fontFamily}
                    label="Phone"
                    value={person.phone}
                    onChange={(e) => {
                        setPerson((person) => ({ ...person!, phone: e.target.value }));
                    }}
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                >
                    Submit
                </button>

            </form>

            <hr />

            <div className="m-2">

                {/* <pre
                    className="overflow-hidden"
                >
                    {JSON.stringify(person, null, 2)}
                </pre> */}
                {Object.entries(person).map(([key, val], index) => {
                    return <p key={index}>{key}: {val}</p>
                })}
            </div>

        </section>
    )
}