import { save, load } from "./storage.js";

const STORAGE_KEY = "todos";

export const state = {
    todos: load(STORAGE_KEY, [])
};

export function setState(updates) {
    Object.assign(state, updates);
    save(STORAGE_KEY, state.todos);
}
