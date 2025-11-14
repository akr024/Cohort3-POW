import { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  useEffect(function(){
    setTimeout(function(){
      console.log("navigating")
      navigate("/contact")
  }, 3000)
  } , [])


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>

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
