import { createContext, useContext, useState } from "react"

const BulbContext = createContext();

function App() {

  // issue: leads to prop drilling
  // solution: use contextAPI
  
  const [lightStat, setLightStat] = useState(true);


  return (
    // ugly way of using contextAPI, without wrapper
    <>
      <BulbContext.Provider value={{lightStat: lightStat, setLightStat: setLightStat}}>
        <LightBulb />
      </BulbContext.Provider> 
    </>
  )
}


function LightBulb(){
  return (
    <>
      <LightStatus/>
      <ToggleButton/>
    </>
  )
}

function ToggleButton(){

  const {setLightStat} = useContext(BulbContext);

  function switchLight(){
    setLightStat(c => !c)
  }

  return(
    <div>
      <button onClick={switchLight}>Toggle Light</button>
    </div>
  )
}

function LightStatus(){
  
  const {lightStat} = useContext(BulbContext);

  return (
    <div>
      {lightStat ? "ON!" : "OFF!"}
    </div>
  )
}


export default App
