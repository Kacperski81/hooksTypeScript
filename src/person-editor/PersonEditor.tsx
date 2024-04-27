import { useState } from 'react';
import { LabeledInput } from '../components'
import { initialPerson } from '../utils/InitialPerson';

export function PersonEditor() {
    const [person, setPerson] = useState(initialPerson);

    return (
        <section>
            <form>
                <LabeledInput label="First Name" />
                <LabeledInput label="Surname" />
                <LabeledInput label="Email" />
                <LabeledInput label="Address" />
                <LabeledInput label="Phone" />
                <button 
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Submit</button>
            </form>
            <hr />
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </section>
    )
}