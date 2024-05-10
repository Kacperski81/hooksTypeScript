import { KimrofObject, KimrofProperty } from "./Types"

interface SetPropertyAction {
    type: "set-property"
    payload: { name: string, value: KimrofProperty }
}

export interface Metadata {
    isDirty: boolean,
    isValid: boolean | null
}

interface ReducerState {
    values: KimrofObject
    metadata: Metadata
}

type SomeAction = SetPropertyAction

export function kimrofReducer(state: ReducerState, action: SomeAction) {
    switch (action.type) {
        case "set-property":
            return {
                ...state,
                metadata: { ...state.metadata, isDirty: true },
                values: {
                    ...state.values,
                    [action.payload.name]: action.payload.value
                } 
            }
    }
    return state
}