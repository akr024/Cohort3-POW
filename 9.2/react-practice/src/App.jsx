import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /* does not work
  setInterval(function(){
    setCount(count + 1)
  }, 1000)
  */

  // note: with react.strictmode, useeffect is called twice on mount
  useEffect(function(){
    setInterval(function(){
      setCount(function(count){
        return count + 1;
      })
    }, 1000)
  }, [])

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
