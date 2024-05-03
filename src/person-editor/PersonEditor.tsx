import { useState } from 'react';
import { LabeledInput } from '../components'
import { initialPerson } from '../utils/InitialPerson';


export function PersonEditor() {
    const [person, setPerson] = useState(() => initialPerson);

    return (
        <section className="max-w-full">

            <form>

                <LabeledInput
                    label="First Name"
                    value={person.firstname}
                    onChange={(e) => {
                        setPerson((state) => ({...state,firstname: e.target.value}));
                    }}
                />

                <LabeledInput
                    label="Surname"
                    value={person.surname}
                    onChange={(e) => {
                        setPerson((state) => ({...state,surname: e.target.value}));
                    }}
                />

                <LabeledInput
                    label="Email"
                    value={person.email}
                    onChange={(e) => {
                        setPerson((state) => ({...state,email: e.target.value}));
                    }}
                />

                <LabeledInput
                    label="Address"
                    value={person.address}
                    onChange={(e) => {
                        setPerson((state) => ({...state,address: e.target.value}));
                    }}
                />

                <LabeledInput
                    label="Phone"
                    value={person.phone}
                    onChange={(e) => {
                        setPerson((state) => ({...state,phone: e.target.value}));
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

            <p className="m-2">

                <pre
                    className="overflow-hidden"
                >
                    {JSON.stringify(person, null, 2)}
                </pre>

            </p>

        </section>
    )
}