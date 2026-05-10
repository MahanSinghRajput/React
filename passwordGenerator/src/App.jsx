import { useState, useCallback, useEffect, useRef } from 'react'
//import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    //passRef.current?.setSelectionRange() //you can set range to select password
    window.navigator.clipboard.writeText(password)
    //alert("copied to ClipBoard!!")
  },[password])


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "~!@#$%^&*()[]{}₹"
    for(let i=1;i<=length;i++){
      let ch = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(ch)
    }
    setPassword(pass)
  }, [length,num,char,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,num,char,passwordGenerator])

  return (
    <>
      <div style = {{backgroundColor: "white"}}>
        <h1 style = {{color: "black"}}>Password Generator</h1>
        <input type = "text" value = {password} placeholder='password' readOnly ref = {passRef}/>
        <button onClick = {copyToClipboard}>Copy</button>
        <button onClick = {passwordGenerator}>Refresh</button>
      </div>

      <div>
        <div>
          <input type="range" min = {8} max = {32} value = {length} onChange = {(e) => {setLength(e.target.value)}} />
          <label>Length : {length}</label>
        </div>

        <div>
          <input type = "checkbox" defaultChecked = {num} id = "numberInput"
            onChange = {() => {setNum((p) => !p)}}
          />
          <label htmlFor='numberInput'>Number Allowed</label>
        </div>
        <div>
          <input type = "checkbox" defaultChecked = {char} id = "charInput"
          onChange = {() => {setChar((p) => !p)}}
          />
          <label htmlFor='charInput'>Character Allowed</label>
        </div>
      </div>
    </>
  )
}

export default App
