import { createContext, memo, useContext, useState } from 'react'
import './App.css'

const appContext = createContext();

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <appContext.Provider value={{count, setCount}}>
        <MemoizedIncrease />
        <MemoizedDecrease />
        <Value />
      </appContext.Provider>
      
    </>
  )
}

const MemoizedIncrease = memo(Increase)

function Increase (){
  const {setCount} = useContext(appContext);

  return (
    <div>
      <button onClick={() => {setCount(c => c+1)}}>Increase</button>
    </div>
  )
}

const MemoizedDecrease= memo(Decrease)

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
