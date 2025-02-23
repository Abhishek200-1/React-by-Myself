import React from 'react'
import './App.css'

const App = () => {
  
  let counter = 5

  return (
    <div>
      <h1>Counter Application</h1>
      <h2>counter value: {counter}</h2>

      <button>Add Value</button>
      <br /><br />
      <button>Remove value</button>
    </div>
  )
}

export default App
