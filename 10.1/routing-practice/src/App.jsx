import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

function Layout(){
  return(
    <> 
      Header <br></br>
      <Link to="/home">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link> 
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
