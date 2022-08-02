import { useState, useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null)
  const counter = useRef(0)
  const [searchString, setSearchString] = useState('')

  const setFocus = () => {
    inputRef.current ?.focus()
  }

  const onClick = () => {
    counter.current += 1
    console.log(`Clicks: ${counter.current}`)
  }

  console.log("render")

  return (
    <div className="App" >
      <div>
        <label className="label">Search:</label>
        <input
          ref={inputRef}
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={setFocus}>Set focus</button>
      </div>
      <div>
        <button type="button" onClick={onClick}>+1</button>
      </div>
    </div>
  );
}

export default App;
