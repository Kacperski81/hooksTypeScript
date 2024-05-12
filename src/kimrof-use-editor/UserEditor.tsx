import { clsx } from "clsx"
import { KimrofLabeledField, useKimrof, useKimrofForm } from "./kimrof"

export function UserEditor() {
    const formProps = useKimrofForm();
    const { values, metadata : { isDirty } } = useKimrof()

    return (
        <form {...formProps}>
            <h4>Kimrof User Editor</h4>
            <KimrofLabeledField name="firstname" label="First Name" />
            <KimrofLabeledField name="surname" label="Surname Name" />
            <KimrofLabeledField name="email" label="Email" />
            <KimrofLabeledField name="address" label="Address" />
            <KimrofLabeledField name="phone" label="Phone" />
            <button className={clsx("bg-blue-500",{ "bg-red-500":!isDirty})} disabled={!isDirty}>
                Save
            </button>
            <hr />
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
    )
}