import { useState, useEffect } from 'react'
import axios from './api/Stu_api.jsx'
import './App.css'

function App() {
  const [Slist, setList] = useState([])

  useEffect(() => {
    const fetData = async () => {
      try {
        const res = await axios.get('/student')  
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetData()
  }, [])   

  return (
    <>
      {
        Slist.map((stu) => (
          <p key={stu.id}>{stu.sid} - {stu.name} - {stu.smark}</p>
        ))
      }
    </>
  )
}

export default App
