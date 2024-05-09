import { LabeledInput } from '../components';
import { initialPerson } from '../utils/InitialPerson';
import { usePerson } from './usePerson';

export function PersonEditor() {
    const [person, setProperty, setProperties, { isDirty, isValid }] = usePerson(initialPerson);
    if (!person) return <div>Loading...</div>

    return (
        <section className="max-w-full">

            <form onSubmit={(e) => {
                e.preventDefault();
                alert("<pre>" + JSON.stringify(person, null, 2) + "</pre>");
                console.log('ok')}}
            >

                <LabeledInput
                    label="First Name"
                    value={person.firstname}
                    onChange={(e) => {
                        // setPerson((person) => ({ ...person!, firstname: e.target.value }));
                        setProperty("firstname", e.target.value)

                        if(e.target.value === "Ford") {
                            setProperties({
                                surname: "Prefect",
                                address: "Outer Space",
                                email: "",
                                phone: "",
                            })
                        }
                    }}
                />

                <LabeledInput
                    label="Surname"
                    value={person.surname}
                    onChange={(e) => {
                        // setPerson((person) => ({ ...person!, surname: e.target.value }));
                        setProperty("surname", e.target.value)
                    }}
                />

                <LabeledInput
                    label="Email"
                    value={person.email}
                    onChange={(e) => {
                        // setPerson((person) => ({ ...person!, email: e.target.value }));
                        setProperty("email", e.target.value)
                    }}
                />

                <LabeledInput
                    label="Address"
                    value={person.address}
                    onChange={(e) => {
                        // setPerson((person) => ({ ...person!, address: e.target.value }));
                        setProperty("address", e.target.value)
                    }}
                />

                <LabeledInput
                    label="Phone"
                    value={person.phone}
                    onChange={(e) => {
                        // setPerson((person) => ({ ...person!, phone: e.target.value }));
                        setProperty("phone", e.target.value)    
                    }}
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                    disabled={!isDirty || !isValid}
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