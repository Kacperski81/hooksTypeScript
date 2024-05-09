
import { KimrofLabeledField } from "./kimrof/KimrofLabeledField"

export function UserEditor() {

    return (
        <div>
            <h4>Kimrof User Editor</h4>
            <KimrofLabeledField name="firstname" label="First Name" />
            <KimrofLabeledField name="surname" label="Surname Name" />
            <KimrofLabeledField name="email" label="Email" />
            <KimrofLabeledField name="address" label="Address" />
            <KimrofLabeledField name="phone" label="Phone" />
        </div>
    )
}