import { text } from 'express';
import { useEffect, useRef, useState } from 'react'

function useDebounce(func) {
  const clock = useRef();

  const fn = () => {
    clearTimeout(clock.current)
    clock.current = setTimeout(func, 700)
  }

  return fn
}


function App() {
   
  function textChange(){
    console.log("request sent" )
  }

  const debouncedFunc = useDebounce(textChange);

  return (
    <>
      <input type="text" onChange={debouncedFunc} />
    </>
  )
}

export default App
