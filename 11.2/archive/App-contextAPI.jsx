import { createContext, useContext, useState } from 'react'
import './App.css'

const appContext = createContext();

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <appContext.Provider value={{count, setCount}}>
        <Increase />
        <Decrease />
        <Value />
      </appContext.Provider>
      
    </>
  )
}

function implementAI(){
  return <div>
    
  </div>
}


function Increase(){
  const {setCount} = useContext(appContext);

  return (
    <div>
      <button onClick={() => {setCount(c => c+1)}}>Increase</button>
    </div>
  )
}


function Decrease(){
  const {setCount} = useContext(appContext);

  return (
    <div>
      <button onClick={() => {setCount(c => c-1)}}>Decrease</button>
    </div>
  )
}


function Value(){
  const {count} = useContext(appContext);

  return (
    <div>
      {count}
    </div>
  )
}

export default App
