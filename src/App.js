import 'bootstrap/dist/css/bootstrap.css'
import React,{useState} from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import {ListGroup} from 'reactstrap'
import TodoForm from './components/TodoForm'
function App() {
  const [todos, setTodos] = useState(
    [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true}
    ]
  )
  return (
    <div className="App ">
      <h2>To do List</h2>
      <ListGroup >
      {todos.map(todo => (
        <TodoItem key= {todo.id} props={todo} todos={todos} setTodos={setTodos}></TodoItem>
      ))}
      </ListGroup>
      <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
    </div>
  );
}

export default App;
