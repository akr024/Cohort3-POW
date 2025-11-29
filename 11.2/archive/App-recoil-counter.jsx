import { createContext, useContext, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import countAtom from '../atom/atom'

// REACT19 DOES NOT SUPPORT RECOIL ANY LONGER,
// USING RECOIL FOR LEARNING PURPOSES TO LATER MIGRATE TO ZUSTAND
function App() {

  return (
    <>
      <RecoilRoot>
        <Value/>
        <Increase/>
        <Decrease />
      </RecoilRoot>
    </>
  )
}


function Increase(){
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => {setCount(c => c+1)}}>Increase</button>
    </div>
  )
}


function Decrease(){
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => {setCount(c => c-1)}}>Decrease</button>
    </div>
  )
}


function Value(){
  const count = useRecoilValue(countAtom);

  return (
    <div>
      {count}
    </div>
  )
}

export default App
