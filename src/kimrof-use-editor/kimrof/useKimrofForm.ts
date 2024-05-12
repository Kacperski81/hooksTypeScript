import { useCallback, useContext } from "react"
import { KimrofContext } from "./KimrofContext"

export function useKimrofForm() {
    const { submitForm } = useContext(KimrofContext)

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submitForm()
    },[submitForm])

    return { onSubmit } as const
}