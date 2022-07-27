
import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  return <div className="App">
    <input
      type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
    {password.length < 8 ? <div>Simple</div> : <div>Dificult</div>}
  </div>;
}

export default App;
