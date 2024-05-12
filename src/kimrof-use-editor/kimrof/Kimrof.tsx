import { useMemo, useReducer } from "react"
import { kimrofContext, KimrofContext } from "./KimrofContext"
// import { KimrofProperty } from "./Types"
// import { Person } from "../../types/person"
// import { IndexedPerson } from "../../types/IndexedPerson"
import { KimrofObject, KimrofProperty } from "./Types"
import { kimrofReducer } from "./kimrofReducer"

interface Props<TData> {
    children: React.ReactNode
    initialValues: TData
    onSubmit: (values: TData) => void
}

export function Kimrof<TData extends KimrofObject>({children, initialValues, onSubmit}: Props<TData>) {
    
    const [{values, metadata}, dispatch] = useReducer(kimrofReducer, {
        values: initialValues,
        metadata: {isDirty: false, isValid: true},
    })
    
    const context: kimrofContext = useMemo(() => ({
        values,
        metadata,
        submitForm: () => onSubmit(values as TData),
        setFieldValue: (name: string, value: KimrofProperty) => {
            dispatch({type: "set-property", payload: {name, value}})
        }
    }),[values, metadata, onSubmit])


    return (
        <KimrofContext.Provider value={context}>
            {children}
        </KimrofContext.Provider>
    )
}