import {useContext, useCallback, ChangeEvent} from 'react'
import {KimrofContext} from './KimrofContext'

export function useKimrofField(name: string) {
    const {values,setFieldValue} = useContext(KimrofContext)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFieldValue(e.target.name, e.target.value)
    }, [setFieldValue])

    return {
        value: values[name],
        onChange
    } as const
}