let inputText = document.querySelector(`input[type="text"]`);
let root = document.querySelector("ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let activeButton = "all";

let allTodos = localStorage.getItem("allTodos")
  ? JSON.parse(localStorage.getItem("allTodos"))
  : [];

function handleInput(event) {
  let value = event.target.value;

  if (event.keyCode === 13 && value !== "") {
    let todo = {
      name: value,
      isDone: false,
    };
    allTodos.push(todo);
    event.target.value = "";

    todoUI();

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }
}

function handleChecked(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  todoUI();
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  todoUI();
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function todoUI(data = allTodos) {
  root.innerHTML = "";
  data.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input", handleChecked);
    input.setAttribute("data-id", i);
    input.checked = todo.isDone;
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", i);
    span.addEventListener("click", handleDelete);
    li.append(input, p, span);
    root.append(li);
  });
}

all.addEventListener("click", () => {
  todoUI();
  activeButton = "all";
  updateActiveButton();
});

active.addEventListener("click", () => {
  let notCompleted = allTodos.filter((todo) => !todo.isDone);
  todoUI(notCompleted);
  activeButton = "active";
  updateActiveButton();
});

completed.addEventListener("click", () => {
  let Completes = allTodos.filter((todo) => todo.isDone);
  todoUI(Completes);
  activeButton = "completed";
  updateActiveButton();
});

clear.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  todoUI();
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
});

function updateActiveButton(btn = activeButton) {
  all.classList.remove("selected");
  active.classList.remove("selected");
  completed.classList.remove("selected");

  if (btn === "all") {
    all.classList.add("selected");
  }
  if (btn === "active") {
    active.classList.add("selected");
  }
  if (btn === "completed") {
    completed.classList.add("selected");
  }
}

updateActiveButton();

inputText.addEventListener("keyup", handleInput);