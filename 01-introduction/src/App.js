// императивный стиль начало
import logo from './logo.svg'
import './App.css'

export const App = () => {
  const currentYear = new Date().getFullYear()

  return (
    // декларативный стиль начало
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>{currentYear}</span>
      </header>
    </div>
    // декларативный стиль конец
  )
}
// императивный стиль конец
