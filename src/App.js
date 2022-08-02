import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: 'Go to the mall'
    },
    {
      id: 2,
      item: 'Pick up clothes from the dry cleaners'
    },
    {
      id: 3,
      item: 'Write todos'
    },
  ])

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App" >
      <ul>
        {todos.map((todo) => (
          <li key={todo.id.toString()}>
            {todo.item}
            <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
