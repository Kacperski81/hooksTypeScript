import { createContext } from 'react'
import { KimrofObject, KimrofProperty } from './Types'

export interface kimrofContext {
    values: KimrofObject
    setFieldValue: (name: string, value: KimrofProperty) => void
}

export const KimrofContext = createContext<kimrofContext>({
    values: {},
    setFieldValue: () => void null,
})



