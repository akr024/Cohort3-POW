const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());


const todosfile = path.join(__dirname, '/todos.json');

function getTodos(){
    const todosJSON = fs.readFileSync(todosfile, 'utf-8');
    const todosWithoutUTF = fs.readFileSync(todosfile);
    console.log("todos without utf", todosWithoutUTF);
    console.log("todos with utf", todosJSON);
    const todos = JSON.parse(todosJSON);
    console.log("todos parsed with JSON", todos);
    return todos;
}

app.get('/todos', function(req, res){
    const todos = getTodos();
    res.send("hello");
})

app.post('/todos', function(req, res){
    const desc = req.body.description;
    const id = getTodos()[getTodos().length - 1].id + 1;

    const newTodo = {
        id: id,
        description: desc
    }
    
    const allTodos = getTodos();
    allTodos.push(newTodo);

    const allTodosJSON = JSON.stringify(allTodos, null, 2);
    
    fs.writeFileSync(todosfile, allTodosJSON);

    res.status(200).send("Todo added");
    
})

app.delete('/todos/:id', function(req, res){
    const todos = getTodos();
    const id = req.params.id;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            todos.splice(i, 1);
        }
    }
    const deletedTodos = JSON.stringify(todos, null, 2);
    
    fs.writeFileSync(todosfile, deletedTodos);

    res.status(200).send("Todo deleted");
})

app.put('/todos/:id', function(req, res){
    const todos = getTodos();
    const newDesc = req.body.description;
    const id = req.params.id;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            todos[i].description = newDesc;
            console.log("todo updated")
        }
    }

    const updatedTodos = JSON.stringify(todos, null, 2);
    
    fs.writeFileSync(todosfile, updatedTodos);

    res.status(200).send("Todo updated");

})

app.listen(3000, function(){
    console.log("server started on port 3000");
})