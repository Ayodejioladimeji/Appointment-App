import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Appointment from '../pages/Appointment'
import Announcement from '../pages/Announcement'
import Complain from '../pages/Complain'
import Default from '../components/Default'



const Routing = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/appointment" exact component={Appointment} />
            <Route path="/announcement" exact component={Announcement} />
            <Route path="/complain" exact component={Complain} />
            <Route exact component={Default} />
        </Switch>
    )
}

export default Routing
