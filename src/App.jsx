import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+-={}[]~`"
    for(leti=1;i<=length;i++){
      pass+= str.charAt(Math.floor(Math.random*str.length()+1))
      
    }
     setPassword(pass)
  },[numberAllowed,charAllowed,length,setPassword])
  return (
    <>
      <h1>Password Generator</h1>

      <div className='container'> test </div>
    </>
  )
}

export default App
