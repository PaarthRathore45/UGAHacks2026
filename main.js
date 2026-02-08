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
        addTodos(todosHigh[0], highList);
      });
      todosMed.forEach((todo) => {
        addTodos(todosMed[0], medList);
      })
      todosLow.forEach((todo) => {
        addTodos(todosLow[0], lowList);
      });

    })
  .catch(err => console.log(err));

medList.addEventListener("click", async (e) => {
    if (e.target && e.target.matches('.delete')) {
      console.log(e.target);
      let id = e.target.id
      e.target.closest('li').remove();
      await deleteTodo(id);
  }

})
  highList.addEventListener("click", async (e) => {
    if (e.target && e.target.matches(".delete")) {
      console.log(e.target);
      let id = e.target.id
      e.target.closest("li").remove();
      await deleteTodo(id);
    }
  });
  lowList.addEventListener("click", async (e) => {
    if (e.target && e.target.matches(".delete")) {
      console.log(e.target);
      let id = e.target.id
      console.log(id);
      e.target.closest("li").remove();
      await deleteTodo(id)
    }
  });
  
function addTodos(todos, listElement) {
  console.log(todos, listElement);
  console.log(todos.title, todos.id)
  let li = document.createElement("li");
  li.setAttribute("id", 1)
  let toggleButton = document.createElement("input");
  toggleButton.className = "checkbox";
  toggleButton.type = "checkbox";
  toggleButton.id = todos.id;
  let label = document.createElement("label");
  label.for = todos.id;
  label.setAttribute("for", todos)
  label.setAttribute("id", "label-" + todos.id);
  label.textContent = todos.title;
  let editButton = document.createElement("button")
  editButton.className = "btn edit"
  editButton.textContent="Edit"
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn delete";
  deleteButton.textContent = "Delete";
  deleteButton.id = todos.id;
  li.appendChild(toggleButton);
  li.appendChild(label);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  listElement.appendChild(li);

}
