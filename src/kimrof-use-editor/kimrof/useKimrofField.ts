import {useContext, useCallback, ChangeEvent} from 'react'
import {KimrofContext} from './KimrofContext'

export function useKimrofField(name: string) {
    const {values} = useContext(KimrofContext)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }, [])

    return {
        value: values[name],
        onChange
    } as const
}