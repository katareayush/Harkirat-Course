import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Landing } from '../pages/Landing'

import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <div>
      
    <div >
      <button onClick={() =>{
       navigate("/");
      }}>Landing</button>

      <button onClick={() =>{
        navigate("/dashboard");
      }}>Dashboard</button>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/landing" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
