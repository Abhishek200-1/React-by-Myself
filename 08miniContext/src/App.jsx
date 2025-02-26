import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React with Abhishek Vishwakarma</h1>
    </UserContextProvider>
  )
}

export default App
