import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="link"
            href="https://rollupjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about RollupJS
          </a>
        </header>
      </div>
    )
  }
}

export default App