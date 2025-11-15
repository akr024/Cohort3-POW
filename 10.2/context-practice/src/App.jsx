import { createContext, useContext, useState } from "react"

const BulbContext = createContext();

// wrap the context provider for better readability and maintenance
function BulbProvider({children}){

  const [lightStat, setLightStat] = useState(true);

  return (<BulbContext.Provider value={{lightStat: lightStat, setLightStat: setLightStat}}>
    {children}
  </BulbContext.Provider>)
}

function App() {

  return (
    // ugly way of using contextAPI, without wrapper
    <>
      <BulbProvider>
        <LightBulb />
      </BulbProvider> 
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
