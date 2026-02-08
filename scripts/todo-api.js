const url = "http://localhost:8080/api/todos"
let todos = [];
async function getAllTodos() {
    try {
        const response = await fetch(url)
            .then(res => res.json())
            .then(data => todos = data)
            .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

async function getTodo(id) {
    try {
        const response = await fetch(url + "/" + id)
            .then(res => res.json())
            .catch(err => console.log(err));
        if (response) {
            return response;
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateTodo(id, newTodo) {
    try {
        console.log("updateTodo newTodo: ", JSON.stringify(newTodo));
        const response = await fetch(url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(newTodo),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .catch(err => console.log(err));
        if (response) {
            console.log(response);
            return response;
        }
    } catch (error) {
        console.log(error)
    }

}

async function deleteTodo(id) {
    try {
        const response = await fetch(url + "/" + id, {
            method: "DELETE"
        }).then(res => res.json())
            .catch(err => console.log(err));
        if (response) {
            console.log(response);
            return response;
        }
    } catch (error) {
        console.log(error)
    }
}
