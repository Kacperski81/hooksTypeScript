import { Person } from "./person"
import { KimrofProperty } from "../kimrof-use-editor/kimrof/Types"

export interface IndexedPerson extends Person {
    [key: string]: KimrofProperty
}