import { useEffect, useRef, useState } from 'react'

function usePrev(num){
  let previous = useRef(null);

  // useEffect runs after returning previous.current on line 11
  useEffect(function(){
    previous.current = num
  }, [num])

  return previous.current;
}


function App() {
  const [count, setCount] = useState(0);
  const result = usePrev(count);
  console.log(result)

  return (
    <>
      <div>
        {count}
        <button onClick={() => {setCount(c=>c+1)}}>increase</button>
        previous value: {result}
      </div>
    </>
  )
}

export default App
