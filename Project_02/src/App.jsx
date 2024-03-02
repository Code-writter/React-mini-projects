import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numCheck, setNumCheck] = useState(false)
  const [charCheck, setCharCheck] = useState(false)
  const [password, setPassword] = useState('') 
  
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback (() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numCheck) str += '0123456789';
    if(charCheck) str += '!@#$%^&*()~_-';

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numCheck, charCheck, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numCheck, charCheck,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' >
      <h1 className='text-white text-center py-5 text-2xl ' >
        Password generator
      </h1>
      <div 
      className='flex shadow rounded-lg overflow-hidden mb-4'> 
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      readOnly
      ref={passwordRef}
      placeholder='Password'
      
      />
      <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPassword}
      >Copy</button>
      </div>
        <div 
        className='flex text-sm gap-x-2'  
      >
        <div
        className='flex iteams-center gap-x-1'
      >
        <input 
        type="range" 
        min = {8}
        max = {15}
        value={length}
        className='curser-pointer'
        onChange={(e) => setLength(e.target.value)}
        />
        <label>length : {length}</label>
      </div>

        <div className='flex iteam-centre gap-x-1' >
          <input type="checkbox"
          defaultChecked={numCheck}
          id='numberInput'
          onChange={() => {
            setNumCheck((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex iteam-centre gap-x-1' >
            <input type="checkbox"
            defaultChecked={charCheck}
            id='symbolInput'
            onChange={() => {
              setCharCheck((prev) => !prev);
            }}
            />
          <label htmlFor="symbolInput">Symbols</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
