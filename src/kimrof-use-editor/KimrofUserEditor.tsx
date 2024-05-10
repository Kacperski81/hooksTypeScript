import { Kimrof } from "./kimrof/Kimrof";
import { initialPerson } from "../utils";
import { UserEditor } from "./UserEditor";
import { IndexedPerson } from "../types/IndexedPerson";

export function KimrofUserEditor() {
    return (

        <Kimrof initialValues={initialPerson as IndexedPerson}>
            <div>
                <h4>Kimrof User Editor</h4>
                <p>Perosn name: {initialPerson.firstname}</p>
            </div>
            <UserEditor />
        </Kimrof>
    )
}