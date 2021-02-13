import React, {useState,createContext, useReducer} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from './components/Routing'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css';
import {reducer, initialState} from './reducers/userReducer'



export const UserContext = createContext()

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const [isOpen, setisOpen] = useState(false)
  const toggleSidebar = ()=>{
    setisOpen(!isOpen)
  }

  return (
    <UserContext.Provider value={{state, dispatch}}>
        <Router>
        <Navbar toggleSidebar = {toggleSidebar}/>
        <Sidebar isOpen={isOpen} toggleSidebar = {toggleSidebar}/>
        <Routing/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
