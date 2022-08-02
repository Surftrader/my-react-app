import { useRef } from 'react'
import './App.css'
import FormSearch from './components/FormSearch'

function App() {
  const formSearchRef = useRef(null)
  return (
    <div className="App" >
      <FormSearch ref={formSearchRef} />
      <div>
        <button
          type="button"
          onClick={() => formSearchRef.current ?.onSubmit()}
        >Send form in parent component</button>
      </div>
    </div>
  );
}

export default App;
