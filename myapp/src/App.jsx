import {useState} from 'react'
function App() {

  //let counter = 15 //this way of using variables will not update the values in UI

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1) //1st method

    //if you want to handle such a case where you need to update calue multiple times in a single function then repeating setCounter doesnot work, setCounter works in batches hence the update will be reflected together and only ones, instead use
    // setCounter((prevCounter) => {prevCounter + 1})
    // setCounter((prevCounter) => {prevCounter + 1}) //prevCounter is variable name only
    // setCounter(prevCounter => prevCounter + 1) //basic JS
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter) //2nd method
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick = {addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue} >Remove Value {counter} </button>
    <p>{counter}</p>
    </>
  )
}

export default App
