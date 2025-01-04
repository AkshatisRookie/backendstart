import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [intern,setintern]= useState([])

  useEffect(()=>{
    axios.get('/api/intern') //get request kari
    .then((response)=>{
      setintern(response.data) //if response is taken s
    })
    .catch((error)=>{
      console.log(error)
    }
    )
  }
  )

  return (
    <>
      <h1> full stack start</h1>
      <p>INTERNS: {intern.length}</p>

               
      {
        intern.map((intern,index)=>(
          <div key={intern.id}>
            <h3>{intern.title}</h3>
            <p>{intern.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
