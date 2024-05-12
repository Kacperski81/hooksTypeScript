import { IndexedPerson } from "../types/IndexedPerson";
import { KimrofError } from "./kimrof/Types";

export function validatePerson(person: IndexedPerson) {
    const errors: KimrofError = {}

    if (!person.firstname) {
        errors.firstname = "The first name is required!"
    }

    if (!person.surname) {
        errors.surname = "The last name is required!"
    }

    return errors
}