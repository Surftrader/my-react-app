import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const increaseCounter = () => {
    setCounter((prev) => prev + 1)
  }

  useEffect(() => {
    console.log("Changed at ", new Date().toISOString())
  })

  return (
    <div className="App" >
      <div>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <p>{name}</p>
      </div>
      <div>
        {counter}
        <button type="button" onClick={increaseCounter}>+1</button>
      </div>
    </div>
  );
}

export default App;
