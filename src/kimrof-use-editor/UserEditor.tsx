import { LabeledInput } from "../components"
import { useContext } from "react"
import { KimrofContext } from "./kimrof/KimrofContext"
import { Person } from "../types/person"

export function UserEditor() {
    const person: Person = useContext(KimrofContext)

    console.log(person.value.firstname)
    return (
        <div>
            <h4>Kimrof User Editor</h4>
            <LabeledInput label="First Name" value={person.value.firstname} onChange={() => console.log('ok')}/>
        </div>
    )
}