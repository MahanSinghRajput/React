import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
