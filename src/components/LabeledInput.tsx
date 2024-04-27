interface LabeledInputProps {
    label: string;

}

export function LabeledInput({label} : LabeledInputProps) {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input 
                type="text" 
                className={"border border-gray-400 p-1"} />
        </div>
    )
}