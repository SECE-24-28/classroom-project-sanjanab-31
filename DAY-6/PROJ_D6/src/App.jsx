import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'

function App() {
  const handleClick = (name) => {
    console.log('Hello sanjana ' + name)
  }

  return (
    <div className="app-shell">
      <Header />
      <Content />
      <div className="actions">
        <button onClick={() => handleClick('sanjana')}>Click Me</button>
        <p className="hint">Check the console to see the greeting.</p>
      </div>
    </div>
  )
}

export default App
