import { useEffect, useState } from 'react'

function App() {
  
  const [posts, setPosts] = useState({});

  useEffect(function(){
    async function getPost(){
      const postsData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const posts = await postsData.json();
      setPosts(posts);
    }
    getPost();
  }, [])

  return (
    <>
      <div>
        {posts.title}
      </div>
    </>
  )
}

export default App
