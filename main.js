// use todos variable
let todosHigh = [];
let todosMed = [];
let todosLow = [];
let highList = document.getElementById("list-high");
let medList = document.getElementById("list-med");
let lowList = document.getElementById("list-low");
let xp = 0;

getAllTodos()
    .then(data => {
      // console.log(todos);
      todosHigh = todos.filter((todo) => todo.priority == "High");
      todosMed = todos.filter((todo) => todo.priority == "Medium");
      todosLow = todos.filter((todo) => todo.priority == "Low");
      console.log(todosHigh, todosMed, todosLow);
      todosHigh.forEach((todo) => {
        addTodos(todo, highList);
      });
      todosMed.forEach((todo) => {
        addTodos(todo, medList);
      })
      todosLow.forEach((todo) => {
        addTodos(todo, lowList);
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
  toggleButton.checked = todos.completed;
  toggleButton.addEventListener("change", async (e) => {
    
    console.log(e.target)
    let id = e.target.id;
    console.log(id)
    if (e.target.checked) {
      let xpbar = document.getElementById("xp-bar");
      xp += 25;
      xpbar.style.width = xp + "%";
      if (xp == 100) {
        let p = document.getElementById("minigame-p")
        let minigameButton = document.getElementById("minigame");
        p.textContent = "Unlocked Level 1";
        minigameButton.textContent = "level 1"
        minigameButton.addEventListener("click", (e) => {
           window.location.href="minigame/index.html"
         })
      }
      await updateTodo(id, { completed: true })
    } else {
      await updateTodo(id, { completed: false })
    }
  });
  let label = document.createElement("label");
  label.for = todos.id;
  label.setAttribute("for", todos)
  label.setAttribute("id", "label-" + todos.id);
  label.textContent = todos.title;
  let editButton = document.createElement("button")
  editButton.className = "btn edit"
  editButton.textContent = "Edit"
  editButton.dataset.priority = todos.priority;
  editButton.addEventListener("click", async (e) => {
    let priority = e.target.dataset.priority;
    let id = e.target.closest("li").id;
    console.log("id: ", id)
    console.log(priority);
    if (priority == "High") {
      e.target.closest("li").remove();
      medList.appendChild(e.target.closest("li"));
      await updateTodo(id, { priority: "Medium" })
    } else if (priority == "Medium") {
      e.target.closest("li").remove();
      lowList.appendChild(e.target.closest("li"));
      await updateTodo(id, { priority: "Low" });

    } else if (priority == "Low") {
      e.target.closest("li").remove();
      highList.appendChild(e.target.closest('li'));
      await updateTodo(id, { priority: "High" });

    }
  })
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
