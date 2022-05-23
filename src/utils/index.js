import { customAlphabet } from "nanoid";

export const nanoid = customAlphabet("1234567890", 5);

export function changeGlobalStore(name, data) {
    if (!name) return null;

    if (!data) {
        const getState = localStorage.getItem(name);
        return getState ? JSON.parse(getState) : null;
    }

    localStorage.setItem(name, JSON.stringify(data));
}