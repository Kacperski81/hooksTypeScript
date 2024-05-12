import { LabeledInput } from "../../components"
import { useKimrofField } from "./useKimrofField"

export function KimrofLabeledField({name, label}: {name: string, label: string}) {
    const {value, error, onChange} = useKimrofField(name)
    
    return (
        <div>
            <LabeledInput name={name} error={error}  label={label} value={value} onChange={onChange}/>
        </div>
    )
}