import { useState, useCallback, useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]=useState("")

  const passwordRef= useRef(null)
  
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+-={}[]~`"
    for(let i=1;i<=length;i++){
      pass+= str.charAt( Math.floor(Math.random()*str.length+1))
      
    }
     setPassword(pass)
  },[numberAllowed,charAllowed,length,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <h1>Password Generator</h1>
      
      <div className='container'>
        <div className='passContainer'>
          <input type="text" value={password} className='passInput' placeholder='Password' ref={passwordRef}/>
          <button className='btn' onClick={copyPasswordToClip}>copy</button>
        </div>
        <div className='depContainer'>
          <div className='subDepContainer'>
            <input className='inputs' type="range" value={length} min={6} max={50} onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='subDepContainer'>
            <input className='inputs' type="checkbox" value={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label > Numbers</label>
          </div>
          <div className='subDepContainer'>
            <input className='inputs' type="checkbox" value={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label >Special Characters</label>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
