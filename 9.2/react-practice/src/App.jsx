import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count - 1);
  }

  function resetCount(){
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>reset</button>
    </div>
  )
}

export default App
