import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://superzekes.com" target="_blank">
          <img src="https://superzekes.com/images/profile.png" className="logo" alt="SuperZekes Icon" />
        </a>

      </div>
      <h1>Welcome to This Example Site</h1>
      
       <p className="read-the-docs">
        Click on my profile picture to learn more about me
      </p>
    </div>
  )
}

export default App
