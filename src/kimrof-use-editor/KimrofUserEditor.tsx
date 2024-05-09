import { Kimrof } from "./kimrof/Kimrof";
import { initialPerson } from "../utils";
import { UserEditor } from "./UserEditor";

export function KimrofUserEditor() {
    return (

        <Kimrof value={initialPerson}>
            <div>
                <h4>Kimrof User Editor</h4>
                <p>Perosn name: {initialPerson.firstname}</p>
            </div>
            <UserEditor />
        </Kimrof>
    )
}