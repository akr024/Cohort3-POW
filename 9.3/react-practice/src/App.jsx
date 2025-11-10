import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [toggle, setToggle] = useState(true);
  const [clock, setClock] = useState(0);
  const [posts, setPosts] = useState([
    {
      name: "Abhimanyu",
      bio: "MSCS @ Northeastern",
      time: "3 d",
      description: "Learn about HTML from me?",
      profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQGWzFvVgw5WMA/profile-displayphoto-scale_100_100/B4DZher0a8GgAg-/0/1753935203103?e=1764201600&v=beta&t=_hkvtJh8rYGqk1Ytf1M-NvgA9ZaPvqdz3U_XeGavRRA",
      postImage: "https://media.licdn.com/dms/image/v2/D4D22AQGjZtbtawFVMw/feedshare-shrink_2048_1536/B4DZpemJDSGQAw-/0/1762523649720?e=1764201600&v=beta&t=870sBAv2TYrUxwBVOXCZaMsWdTGhikmNQ5AZkZJslUM"
    }
  ]);

  useEffect(function(){
    let clc = setInterval(function(){
      setClock(function(currTime){
        return currTime + 1;
      })
    }, 1000)

    return( // executes when component app unmounted (makes more sense to be placed in a different component)
      function(){
        clearInterval(clc);
      }
    )
  }, [])

  function toggleFunc(){
    setToggle(tog => !tog);
  }

  function addPostFunc(){
    setPosts(function(){
      return [...posts, {
      name: "lalu",
      bio: "MSCS @ Northeastern",
      time: "3 d",
      description: "Learn about HTML from me?",
      profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQGWzFvVgw5WMA/profile-displayphoto-scale_100_100/B4DZher0a8GgAg-/0/1753935203103?e=1764201600&v=beta&t=_hkvtJh8rYGqk1Ytf1M-NvgA9ZaPvqdz3U_XeGavRRA",
      postImage: "https://media.licdn.com/dms/image/v2/D4D22AQGjZtbtawFVMw/feedshare-shrink_2048_1536/B4DZpemJDSGQAw-/0/1762523649720?e=1764201600&v=beta&t=870sBAv2TYrUxwBVOXCZaMsWdTGhikmNQ5AZkZJslUM"
    }]
    })
  }

  return (
    <>
      <div>
        {clock}
      </div>
      <button onClick={toggleFunc}>
        Toggle
      </button>
      <button onClick={addPostFunc}>
        Add post
      </button>
      <br />
      {toggle ? <div>Toggled!!</div>: null}
      {posts.map(post => {
        return <Post name={post.name} bio={post.bio} time={post.time}
        description = {post.description} profilePic={post.profilePic} postImage={post.postImage}
        ></Post>
      })}
    </>
  )
}

function Post(props){

  return(
    <div style={{display: "flex", justifyContent: "center", margin:10}}>
      <div style={{backgroundColor: "#e2e2e2ff", height: "400px", width: "400px", borderRadius: 10, display: 'flex'}}>
        <img style={{width: 60, height: 60, borderRadius: 50, paddingLeft: 25, paddingTop: 25}} src={props.profilePic} alt="" />
        <div>
          <div style={{paddingTop: 30, paddingLeft: 10}}>
            <span style={{fontSize: 20}}><b>{props.name}</b></span>
            <div style={{fontSize: 13}}>{props.bio}</div>
            {props.time ? <div>
              2d . <span></span>
            <img style={{width: 10, height: 10}} src="https://cdn-icons-png.flaticon.com/256/44/44386.png" alt="" />
            </div>: <div><i>Promoted</i></div> }
          </div>
          <div style={{marginLeft: -70, paddingTop:10}}>
            {props.description}
          </div>
          <img style={{marginLeft: -80, paddingTop:10, width: 390, height: 250}} src={props.postImage} alt="" />
        </div>
      </div>
    </div>
  )
}


export default App
