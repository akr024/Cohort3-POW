import { useState } from "react"



function App() {

  return (
    <div>
      <Toggle></Toggle>
    </div>
  )
}


function Toggle(){

  const[isVisible, setIsVisible] = useState(true);

  function toggie(){
    console.log("inside toggie")
    setIsVisible(!isVisible);
  }

  return (
    <>
      <button onClick={toggie}>Toggle</button>
      {isVisible ? <p>toggled!!!</p> : null}
    </>
  )
}


export default App
