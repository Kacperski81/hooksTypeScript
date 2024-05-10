import { useMemo, useReducer } from "react"
import { kimrofContext, KimrofContext } from "./KimrofContext"
// import { KimrofProperty } from "./Types"
// import { Person } from "../../types/person"
import { IndexedPerson } from "../../types/IndexedPerson"
import { KimrofProperty } from "./Types"
import { kimrofReducer } from "./kimrofReducer"

interface Props {
    children: React.ReactNode
    initialValues: IndexedPerson
}

export function Kimrof({children, initialValues}: Props) {
    
    const [{values}, dispatch] = useReducer(kimrofReducer, {
        values: initialValues,
        metadata: {isDirty: false, isValid: true}
    })
    
    const context: kimrofContext = useMemo(() => ({
        values,
        setFieldValue: (name: string, value: KimrofProperty) => {
            dispatch({type: "set-property", payload: {name, value}})
        }
    }),[values])


    return (
        <KimrofContext.Provider value={context}>
            {children}
        </KimrofContext.Provider>
    )
}