import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [toggle, setToggle] = useState(true);

  function toggleFunc(){
    setToggle(tog => !tog);
  }

  return (
    <>
      <button onClick={toggleFunc}>
        Toggle
      </button>
      <br />
      {toggle ? <div>Toggled!!</div>: null}
    </>
  )
}

export default App
