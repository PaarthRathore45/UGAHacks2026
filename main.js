

getAllTodos()
    .then(data => {
        console.log(todos);
    });

getTodo(1).then(data => {
    console.log(data);
});
const newTodo = {
    title: "NEW TITLE",
    priority: "High"
}
updateTodo(2, newTodo);

deleteTodo(1);