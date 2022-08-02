
import './App.css'

function App() {
  const sendForm = (e) => {
    e.preventDefault();
    console.log('Form was sent')
  }
  return (
    <div className="App" >
      <form onSubmit={sendForm}>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
