interface LabeledInputProps {
    label: string;
    value: string;
}

export function LabeledInput({label, value} : LabeledInputProps) {
    return (
        <div className="flex flex-col m-2">
            <label>{label}</label>
            <input 
                type="text"
                value={value}
                className={"border border-gray-400 p-1"} />
        </div>
    )
}