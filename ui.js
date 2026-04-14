import { state } from "./state.js";
import { toggleTodo, deleteTodo } from "./app.js";

export function renderTodos() {
    const list = document.getElementById("todoList");

    list.innerHTML = state.todos.map(todo => `
        <li>
            <span class="${todo.completed ? "completed" : ""}">
                ${todo.text}
            </span>
            <button onclick="toggleTodo(${todo.id})">✔</button>
            <button onclick="deleteTodo(${todo.id})">X</button>
        </li>
    `).join("");
}
