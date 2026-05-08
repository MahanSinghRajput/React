import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div style = {{backgroundColor: color, color: "black", padding: "20px", width: "100%", height: "100vh"}}>
      <div >
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
      </div>
    </div>
  )
}

export default App
