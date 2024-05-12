import { useMemo, useReducer, useCallback } from "react"
import { kimrofContext, KimrofContext } from "./KimrofContext"
// import { KimrofProperty } from "./Types"
// import { Person } from "../../types/person"
// import { IndexedPerson } from "../../types/IndexedPerson"
import { KimrofObject, KimrofProperty, KimrofError } from "./Types"
import { kimrofReducer } from "./kimrofReducer"
import { useThrottle } from "../../hooks/useThrottle"

interface Props<TData> {
    children: React.ReactNode
    validate: (values: TData) => KimrofError
    initialValues: TData
    onSubmit: (values: TData) => void
}

export function Kimrof<TData extends KimrofObject>({children, initialValues, validate, onSubmit}: Props<TData>) {
    
    const [{values, errors, metadata}, dispatch] = useReducer(kimrofReducer, {
        values: initialValues,
        errors: {},
        metadata: {isDirty: false, isValid: true},
    })
    
    const context: kimrofContext = useMemo(() => ({
        values,
        errors,
        metadata,
        submitForm: () => onSubmit(values as TData),
        setFieldValue: (name: string, value: KimrofProperty) => {
            dispatch({type: "set-property", payload: {name, value}})
        }
    }),[values, metadata, errors, onSubmit])

    const validataValues = useCallback(() => {
        if(validate) {
            const errors = validate(values as TData)
            dispatch({type: "validation-result", payload: errors})
        }
    }, [values,validate])

    useThrottle(validataValues,100)

    return (
        <KimrofContext.Provider value={context}>
            {children}
        </KimrofContext.Provider>
    )
}