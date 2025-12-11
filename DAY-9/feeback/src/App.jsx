import { useState, useEffect } from 'react'
import api from './api/Post.jsx'
import './App.css'
import Home from './Home.jsx'
function App() {
  const [posts, setPosts] = useState([])
  const[search, setSearch]=useState('')

  useEffect(() => {
    const fetData = async () => {
      try {
        const res = await api.get('/feeback')
        console.log(res.data)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetData()  
  }, [])

  return (
    <>
      <input type="text" value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='Search...'/>
      <Home posts={posts}></Home>
    </>
  )
}

export default App
