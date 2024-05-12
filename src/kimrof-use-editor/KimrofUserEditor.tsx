import { Kimrof } from "./kimrof/Kimrof";
import { initialPerson } from "../utils";
import { UserEditor } from "./UserEditor";
import { IndexedPerson } from "../types/IndexedPerson";
import { validatePerson } from "./validatePerson";

export function KimrofUserEditor() {
    return (

        <Kimrof 
            initialValues={initialPerson as IndexedPerson} 
            onSubmit={(person) => alert(JSON.stringify(person,null,2))}
            validate={validatePerson}
        >
            <UserEditor />
        </Kimrof>
    )
}