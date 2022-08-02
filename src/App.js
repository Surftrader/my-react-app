import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [myDate, setMyDate] = useState(new Date())

  const increaseCounter = () => {
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setMyDate(new Date())
  }

  console.log('render')

  return (
    <div className="App" >
      <div>{myDate.toISOString()}</div>
      {counter}
      <button type="button" onClick={increaseCounter}>Increase</button>
    </div>
  );
}

export default App;
