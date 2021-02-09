import React, {useState} from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Announcement from './pages/Announcement'
import Complain from './pages/Complain'
import Default from './components/Default'
import Sidebar from './components/Sidebar'

import './App.css';


function App() {

  const [isOpen, setisOpen] = useState(false)
  const toggleSidebar = ()=>{
    setisOpen(!isOpen)
  }

  return (
    <Router>
      <Navbar toggleSidebar = {toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar = {toggleSidebar}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/appointment" exact component={Appointment}/>
        <Route path="/announcement" exact component={Announcement}/>
        <Route path="/complain" exact component={Complain}/>
        <Route exact component={Default}/>
      </Switch>
    </Router>
  );
}

export default App;
