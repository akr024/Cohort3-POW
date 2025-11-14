import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <div>
          Header
        </div>

        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> 

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>

        <div>
          Footer
        </div>

      </BrowserRouter>
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
