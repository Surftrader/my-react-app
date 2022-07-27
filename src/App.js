
import { useState } from 'react'
import './App.css'

function App() {
  const [isShow, setIsShow] = useState(false)
  return <div className="App">
    <button
      type="button"
      onClick={() => setIsShow(true)}>
      Show
    </button>
    {isShow && (
      <div>
        The important message is here
      <button
          type="button"
          onClick={() => setIsShow(false)}>
          Close
      </button>
      </div>
    )}
  </div>;
}

export default App;
