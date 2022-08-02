import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [searchString, setSearchString] = useState('')
  const [someString, setSomeString] = useState('')

  const reverseSomeString = useMemo(() => {
    console.log('Calculation')

    return someString.split("").reverse().join("")
  }, [someString])

  return (
    <div className="App" >
      <div>
        <label className="label">Search:</label>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)} />
      </div>
      <div>
        <label className="label">Some:</label>
        <input
          type="text"
          value={someString}
          onChange={(e) => setSomeString(e.target.value)} />
      </div>
      <div>{reverseSomeString}</div>
    </div>
  );
}

export default App;
