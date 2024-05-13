interface LabeledInputProps {
    label: string;
    error?: string;
    value: string | number;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeledInput = ({name,label, value, error, onChange} : LabeledInputProps) => {
    console.log(error)
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
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}