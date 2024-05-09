import { KimrofContext } from "./KimrofContext"
// import { KimrofProperty } from "./Types"
// import { Person } from "../../types/person"
import { IndexedPerson } from "../../types/IndexedPerson"

interface Props {
    children: React.ReactNode
    values: IndexedPerson

}

export function Kimrof({children, values}: Props) {
    
    return (
        <KimrofContext.Provider value={{values}}>
            {children}
        </KimrofContext.Provider>
    )
}