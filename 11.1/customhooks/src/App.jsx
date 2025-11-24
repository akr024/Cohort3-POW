import { useEffect, useState } from 'react'


function useFetch(url, interval){
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true)

  async function getPost(){
    setLoading(true)
    const postsData = await fetch(url);
    const posts = await postsData.json();
    setPosts(posts);
    setLoading(false)
  }

  useEffect(function() {
    const inter = setInterval(function(){
      getPost();
    }, interval)

    return (function(){
      clearInterval(inter)
    })
  }, [])


  useEffect(function(){
    getPost();
  }, [url])

  return {posts, loading};

}


function App() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1')
  
  const {posts, loading} = useFetch(url, 3000)

  function getData(num){
    setUrl('https://jsonplaceholder.typicode.com/todos/' + num)
  }


  return (
    <>
      <div>
        <div>
          {loading ? "Loading..": posts.title}
        </div>
        <button onClick={()=> getData(1)}>Get 1</button>
        <button onClick={()=> getData(2)}>Get 2</button>
        <button onClick={()=> getData(3)}>Get 3</button>
      </div>
    </>
  )
}

export default App
