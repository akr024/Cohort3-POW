import './App.css'

function App() {
  

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

function Sidebar(){

  return (
    <div className='h-screen w-100 bg-red-400'>
      Sidebar
    </div>
  )
}

function Main(){

  return <div className='h-screen w-full bg-blue-400'>
    
    <div className='bg-black h-40 w-full'>
    </div> 
    <div className='p-10 flex'>
      <ProfileCard />
      <div className='p-10 -translate-y-10'>
        <div >
        Good morning Prabhleen
        </div>
        <CalenderCard/>
      </div>
      <ToolsCard />
    </div>
  </div>
}

function ProfileCard(){
  return <div className='bg-white w-65 h-90 rounded-xl p-20 -translate-y-18'>
    <img src="" alt="girl pic" />
    Prabhleen Kaur <br/> <br/>
    prabhleen@gmail.com <br/>
    939388448 <br/> <br/>
    Delhi, India
  </div>
}

function CalenderCard(){
  return <div className='bg-white w-140 h-100 rounded-xl p-1.5'>
    <div className='my-3 bg-gray-200 w-130 h-10 mx-auto rounded-md'>
      Monday, 14 October
    </div>
    <div>
      calender stuff
    </div>
  </div>
}

function ToolsCard(){
  return <div className='bg-white w-100 h-60 my-6.5 rounded-xl grid grid-cols-2'>
    <div className='col-span-1 m-auto'>
      schedule
    </div>
    <div className='col-span-1 m-auto'>
      join webinar
    </div>
    <div className='col-span-1 m-auto'>
      open recordings
    </div>
  </div>
}



export default App
