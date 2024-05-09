import { KimrofContext } from "./KimrofContext"
// import { KimrofProperty } from "./Types"
import { Person } from "../../types/person"

export function Kimrof({children, value}: {children: React.ReactNode, value: Person}) {
    
    return (
        <KimrofContext.Provider value={{value}}>
            {children}
        </KimrofContext.Provider>
    )
}