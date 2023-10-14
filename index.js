// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterList = document.querySelector(".filter-todo");

// Event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterList.addEventListener("click", filterTodo);

// functions
function addTodo(event) {
  if (!todoInput.value.trim()) {
    alert("some thing not working");
  } else {
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-li");
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const parent = item.parentElement;
    parent.remove();
  } else if (item.classList[0] === "complete-btn") {
    const parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todo = todoList.childNodes;
  todo.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "unCompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
