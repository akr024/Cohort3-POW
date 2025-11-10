import './App.css'
import React from 'react'

function App() {

  return (
    <>
      <Card>
        Hello I am a child
      </Card>
    </>
  )
}

function Card({children}){

  return(
    <div style={{color: "red"}}>
      {children}
    </div>
  )
}


export default App
