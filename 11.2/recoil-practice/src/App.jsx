import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
