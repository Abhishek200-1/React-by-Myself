import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook
  const passwordRef = useRef(null);

  const changeCopyText = () => {
    let button = document.getElementById("copybtn");
    button.innerText = button.innerText === "Copy" ? "Copied" : "Copy";
  }


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor( Math.random() * str.length + 1 ) 

      pass += str.charAt(char)
    }
    setPassword(pass);
 
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3  text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            className='outline-none w-full py-1 px-3 bg-white'
            type="text" 
            value={password} 
            placeholder='Password' 
            readOnly
            ref={passwordRef}
          />
          <button onClick={(e) => {copyPasswordToClipboard(); changeCopyText();}} id='copybtn'  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(event.target.value)}}  
            />
            <label htmlFor="label">{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(e) => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => {setCharAllowed((prev) => !prev)}} />
          </div>
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
    </>
  )
} 

export default App
