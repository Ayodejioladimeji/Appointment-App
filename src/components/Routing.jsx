import React, {useEffect, useContext} from 'react'
import{Switch, Route, useHistory} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Appointment from '../pages/Appointment'
import Announcement from '../pages/Announcement'
import Complain from '../pages/Complain'
import Default from '../components/Default'
import Login from '../components/Login'
import Signup from '../components/Signup';
import Dashboard from './../pages/Dashboard';

import {UserContext} from '../App'


const Routing = () => {
    const history = useHistory()

    const {state, dispatch} = useContext(UserContext)

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        if(user){
            dispatch({type:"USER", payload:user})
            history.push('/dashboard')
        }
        else{
            history.push('/')
        }
    }, [])

    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/appointment" exact component={Appointment}/>
            <Route path="/announcement" exact component={Announcement}/>
            <Route path="/complain" exact component={Complain}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route exact component={Default}/>
      </Switch>
    )
}

export default Routing
