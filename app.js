import { state, setState } from "./state.js";
import { renderTodos } from "./ui.js";
import { generateId } from "./utils.js";

/* ------------------ TODO FUNCTIONS ------------------ */

export function addTodo(text) {
    const newTodo = {
        id: generateId(),
        text,
        completed: false
    };

    setState({
        todos: [...state.todos, newTodo]
    });

    renderTodos();
}

export function toggleTodo(id) {
    const updated = state.todos.map(todo =>
        todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
    );

    setState({ todos: updated });
    renderTodos();
}

export function deleteTodo(id) {
    const filtered = state.todos.filter(todo => todo.id !== id);

    setState({ todos: filtered });
    renderTodos();
}

/* ------------------ EVENT LISTENERS ------------------ */

document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("todoInput");

    if (!input.value.trim()) return;

    addTodo(input.value);
    input.value = "";
});

/* ------------------ SESSION STORAGE FORM ------------------ */

const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");

inputs.forEach(input => {
    const saved = sessionStorage.getItem(input.name);
    if (saved) input.value = saved;

    input.addEventListener("input", () => {
        sessionStorage.setItem(input.name, input.value);
    });
});

form.addEventListener("submit", () => {
    inputs.forEach(input => {
        sessionStorage.removeItem(input.name);
    });
});

/* ------------------ INIT ------------------ */

document.addEventListener("DOMContentLoaded", () => {
    renderTodos();
});

/* Make functions available to HTML buttons */
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
