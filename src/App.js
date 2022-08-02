import './App.css'

function App() {
  const sendForm = () => {
    alert('Form was sent');
  }
  const mouseEnter = () => {
    console.log('Mouse enter');
  }
  const mouseLeave = () => {
    console.log('Mouse leave');
  }
  return (
    <div className="App" >
      <button
        type="button"
        onClick={sendForm}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        Send
      </button>
    </div>
  );
}

export default App;
