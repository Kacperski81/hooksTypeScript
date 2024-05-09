import { createContext } from 'react'
import { KimrofObject } from './Types'

interface kimrofContext {
    values: KimrofObject
}

export const KimrofContext = createContext<kimrofContext>({
    values: {}
})



