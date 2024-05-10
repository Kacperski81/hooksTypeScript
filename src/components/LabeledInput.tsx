interface LabeledInputProps {
    label: string;
    value: string | number;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeledInput = ({name,label, value, onChange} : LabeledInputProps) => {
    return (
        <div className={`flex flex-col m-2`}>
            <label>{label}</label>
            <input
                name={name}
                type="text"
                className={"border border-gray-400 p-1"}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}