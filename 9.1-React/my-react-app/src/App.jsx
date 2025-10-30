import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);


  function addTask(){
    const task = document.getElementById("task").value;
    const desc = document.getElementById("desc").value;
    const newArr = [...todos, {
      "task": task,
      "description": desc
    }]
    setTodos(newArr);
  }


  return (
    <>
      <input id='task' type="text" placeholder='Task' />
      <input id='desc' type="text" placeholder='Description' />
      <br/>
      <button onClick={addTask}>Add</button>
      {todos.map((todo) => (
        <Todo task={todo.task} description={todo.description}></Todo>
      ))}
    </>
  )
}


function Todo(props){
  return <div>
    Task: {props.task}, Description: {props.description}
  </div>
}



export default App
