import { useState, useEffect } from 'react'
import './App.css'

// useEffect, dependency array, cleanups
function App() {
  const [count, setCount] = useState(0);

   function increase(){
    setCount(c => c + 1)
  }
  
  return (
    <div>
      <Counter count={count}></Counter>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

function Counter(props){

  useEffect(function(){
    console.log("Mounted")
    return function(){
      console.log("unmounted")
    }
  }, [])
 
  useEffect(function(){
    // this runs on the first mount of this component, since you 'initialised' the 
    // state of the count variable.
    console.log("count changed!")
    // clean up logic
    return function (){
      console.log("clean up happened")
    }
  }, [props.count])


  return (
    <div>
      Counter {props.count}
    </div>
  )
}

export default App;