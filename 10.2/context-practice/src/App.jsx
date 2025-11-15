import { useState } from "react"

function App() {

  // issue: leads to prop drilling
  // solution: use contextAPI
  const [lightStat, setLightStat] = useState(true);

  return (
    <>
      <LightBulb lightStat={lightStat} setLightStat={setLightStat}/>
    </>
  )
}


function LightBulb({lightStat, setLightStat}){
  return (
    <>
      <LightStatus lightStat={lightStat} />
      <ToggleButton setLightStat={setLightStat}/>
    </>
  )
}

function ToggleButton({setLightStat}){

  function switchLight(){
    setLightStat(c => !c)
  }

  return(
    <div>
      <button onClick={switchLight}>Toggle Light</button>
    </div>
  )
}

function LightStatus({lightStat}){

  return (
    <div>
      {lightStat ? "ON!" : "OFF!"}
    </div>
  )
}


export default App
