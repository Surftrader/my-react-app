import { useState, useMemo } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [searchString, setSearchString] = useState('')
  const [someString, setSomeString] = useState('')
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const filteredItems = useMemo(() => items.filter(item => item % 2 === 0), [items])

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
      <div><List data={filteredItems} /></div>
    </div>
  );
}

export default App;
