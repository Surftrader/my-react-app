import { useState } from 'react'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  const [name, setName] = useState('')
  return <div className="App">
    <label className="label">Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <Welcome name={name} />
  </div>;
}

export default App;
