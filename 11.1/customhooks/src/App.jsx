import { useEffect, useState } from 'react'


function useFetch(url){
  const [posts, setPosts] = useState({});

  useEffect(function(){
    async function getPost(){
      const postsData = await fetch(url);
      const posts = await postsData.json();
      setPosts(posts);
    }
    getPost();
  }, [url])

  return posts;

}


function App() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1')
  
  const posts = useFetch(url)

  function getData(num){
    setUrl('https://jsonplaceholder.typicode.com/todos/' + num)
  }

  return (
    <>
      <div>
        <div>
          {posts.title ? posts.title : "Loading.."}
        </div>
        <button onClick={()=> getData(1)}>Get 1</button>
        <button onClick={()=> getData(2)}>Get 2</button>
        <button onClick={()=> getData(3)}>Get 3</button>
      </div>
    </>
  )
}

export default App
