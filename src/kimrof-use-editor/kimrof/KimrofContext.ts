import { createContext } from 'react'
import { KimrofObject, KimrofProperty, KimrofError } from './Types'
import { Metadata } from './kimrofReducer'

export interface kimrofContext {
    values: KimrofObject
    errors: KimrofError
    metadata: Metadata
    submitForm: () => void
    setFieldValue: (name: string, value: KimrofProperty) => void
}

export const KimrofContext = createContext<kimrofContext>({
    values: {},
    errors: {},
    metadata: {isDirty: false, isValid: true},
    submitForm: () => void null,
    setFieldValue: () => void null,
})



