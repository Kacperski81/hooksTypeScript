import { KimrofObject, KimrofProperty, KimrofError } from "./Types"

interface SetPropertyAction {
    type: "set-property"
    payload: { name: string, value: KimrofProperty }
}

interface ValidataionResultAction {
    type: "validation-result"
    payload: KimrofError
}

export interface Metadata {
    isDirty: boolean,
    isValid: boolean | null
}

interface ReducerState {
    values: KimrofObject
    errors: KimrofError
    metadata: Metadata
}

type SomeAction = SetPropertyAction | ValidataionResultAction

export function kimrofReducer(state: ReducerState, action: SomeAction) {
    switch (action.type) {
        case "set-property":
            return {
                ...state,
                metadata: { ...state.metadata, isValid: null, isDirty: true },
                values: {
                    ...state.values,
                    [action.payload.name]: action.payload.value
                } 
            }
        case "validation-result":
            return {
                ...state,
                metadata: {
                    ...state.metadata,
                    isValid: Object.keys(action.payload).length === 0,
                },
                errors: action.payload
            }
    }
    return state
}