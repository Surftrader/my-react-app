
import PreviewPost from './components/PreviewPost'
import './App.css'

function App() {
  return <div className="App">
    <PreviewPost
      title="News #1"
      shortDescription="Shot description of news #1"
    />
    <PreviewPost
      title="News #2"
      shortDescription="Shot description of news #2"
    />
    <PreviewPost
      title="News #3"
      shortDescription="Shot description of news #3"
    />
  </div>;
}

export default App;
