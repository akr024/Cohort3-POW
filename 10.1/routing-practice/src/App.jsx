import { useEffect, useRef, useState } from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  // const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const inp = useRef();

  let interval = useRef();

  // useEffect(function(){
  //   setTimeout(function(){
  //     console.log("navigating")
  //     navigate("/contact")
  // }, 3000)
  // } , [])

  function focus(){
    inp.current.focus();
  }

  function watchStart(){
    interval.current = setInterval(function(){
      setCount(c => c + 1);
    }, 1000)
  }

  function watchStop(){
    console.log("watch stopped")
    clearInterval(interval.current);
  }

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>

      <input ref={inp} type="text" />

      <button onClick={focus}>Hello</button>

      <br />
      
      <div>
        <b>Stopwatch below:</b>
      </div>

      {count}

      <br/>

      <button onClick={watchStart}>Start</button>
      <button onClick={watchStop}>Stop</button>



    </>
  )
}

function Layout(){
  return(
    <> 
      Header <br></br>
      <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      <Outlet />

      Footer
    </>

  )
}

function Contact(){
  return (
    <div>
      Contact me
    </div>
  )
}

function About(){
  return (
    <div>
      About
    </div>
  )
}


function Home(){
  return (
    <div>
      home
    </div>
  )
}

export default App
