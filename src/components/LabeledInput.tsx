interface LabeledInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fontFamily: string;
}

export function LabeledInput({label, value, onChange, fontFamily} : LabeledInputProps) {
    return (
        <div className={`flex flex-col m-2 ${fontFamily}`}>
            <label>{label}</label>
            <input 
                type="text"
                className={"border border-gray-400 p-1"}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}