import React, { useState } from 'react'
import './App.css'

const App = () => {
  
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h3>Counter App</h3>
      <p>Counter Value: {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default App
