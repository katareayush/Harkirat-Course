import React from 'react'
import { useState , lazy} from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(()=> import ('../pages/Dashboard')) 
const Landing = React.lazy(()=> import ('../pages/Landing')) 
import './App.css'
import { Suspense } from 'react'

function App() {
  

  return (
    <div>
    <BrowserRouter>
    <AppBar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback ={"loading..."}><Dashboard/></Suspense>} />
        <Route path="/" element={<Suspense fallback ={"loading..."}><Landing/></Suspense>} />
      </Routes>
    </BrowserRouter>
    
    </div> 
  )
}

function AppBar(){
  const navigate = useNavigate();

  return <div>
  <div >
  <button onClick={() =>{
   navigate("/");
  }}>Landing</button>

  <button onClick={() =>{
    navigate("/dashboard");
  }}>Dashboard</button>
  </div>
  
  </div>
}

export default App
