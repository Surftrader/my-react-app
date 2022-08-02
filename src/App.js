import './App.css'

function App() {
  const posts = [
    {
      id: 1,
      title: 'News #1',
      shortDescription: 'Short description of news #1'
    },
    {
      id: 2,
      title: 'News #2',
      shortDescription: 'Short description of news #2'
    },
    {
      id: 3,
      title: 'News #3',
      shortDescription: 'Short description of news #3'
    }
  ]
  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id.toString()}>
          <h2>{post.title}</h2>
          <p>{post.shortDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
