import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
  }

  return (
    <div className="App" >
      {counter}
      <button type="button" onClick={increaseCounter}>Increase</button>
    </div>
  );
}

export default App;
