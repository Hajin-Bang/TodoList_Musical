const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOLIST_KEY = "todoList";
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  // const input = document.createElement("input");
  // input.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "✕";
  deleteButton.addEventListener("click", deleteTodo);
  // li.appendChild(input);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = { id: Date.now(), text: newTodo };
  todoInput.value = "";
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOLIST_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
