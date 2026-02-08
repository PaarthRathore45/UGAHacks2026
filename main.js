// use todos variable
let todosHigh = [];
let todosMed = [];
let todosLow = [];
let highList = document.getElementById("list-high");
let medList = document.getElementById("list-med");
let lowList = document.getElementById("list-low");

getAllTodos()
    .then(data => {
      // console.log(todos);
      todosHigh = todos.filter((todo) => todo.priority == "High");
      todosMed = todos.filter((todo) => todo.priority == "Medium");
      todosLow = todos.filter((todo) => todo.priority == "Low");
      console.log(todosHigh, todosMed, todosLow);
      todosHigh.forEach((todo) => {
        addTodos(todosMed[0], highList);
      });
      todosMed.forEach((todo) => {
        addTodos(todosMed[0], medList);
      })
      todosLow.forEach((todo) => {
        addTodos(todosMed[0], lowList);
      });

    })
  .catch(err => console.log(err));
  
function addTodos(todos, listElement) {
  console.log(todos, listElement);
  console.log(todos.title, todos.id)
  let li = document.createElement("li");
  let toggleButton = document.createElement("input");
  toggleButton.className = "checkbox";
  toggleButton.type = "checkbox";
  toggleButton.id = todos.id;
  let label = document.createElement("label");
  label.for = todos.id;
  label.setAttribute("for", todos)
  label.setAttribute("id", "label-1");
  label.textContent = todos.title;
  let editButton = document.createElement("button")
  editButton.className = "btn"
  editButton.textContent="Edit"
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn";
  deleteButton.textContent = "Delete";
  li.appendChild(toggleButton);
  li.appendChild(label);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  listElement.appendChild(li);

}
