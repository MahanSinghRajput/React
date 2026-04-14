import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  //you can also render elements by creating a function
  <a href = 'https://google.com' target = '_blank'>Click Me Again</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  //anotherElement
  reactElement
)
