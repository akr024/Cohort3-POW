import './App.css'
import React from 'react'

function App() {

  return (
    // fragments <> </>
    <>
      <ErrorBoundary>
        <Card>
          Hello I am a child
        </Card>
      </ErrorBoundary>
    </>
  )
}

function Card({children}){

  throw new Error("Something went wrong")

  return(
    <div style={{color: "red"}}>
      {children}
    </div>
  )
}

// error boundary black box code
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


export default App
