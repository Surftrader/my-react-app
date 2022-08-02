import { useCallback, useState, useEffect } from 'react'
import './App.css'
import CustomButton from './components/CustomButton'
import debounce from 'lodash.debounce'

function App() {
  const [searchString, setSearchString] = useState('')
  const [someString, setSomeString] = useState('')

  const apiCall = useCallback(debounce((search) => {
    console.log('Search', search)
  }, 300), [])

  useEffect(() => {
    apiCall(searchString)
  }, [searchString, apiCall])

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
      <div>
        <CustomButton
          title="Submit"
          onClick={apiCall}
        />
      </div>
    </div>
  );
}

export default App;
