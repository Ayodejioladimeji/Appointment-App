import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './components/Routing'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css';


function App() {

  const [isOpen, setisOpen] = useState(false)
  const toggleSidebar = () => {
    setisOpen(!isOpen)
  }

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Routing />
    </Router>
  );
}

export default App;