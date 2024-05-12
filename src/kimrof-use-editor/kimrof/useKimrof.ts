import { useContext } from 'react'
import { KimrofContext } from './KimrofContext'

export function useKimrof() {
    const { values, metadata } = useContext(KimrofContext)

    return { values, metadata } as const
}