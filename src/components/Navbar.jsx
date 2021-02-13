import React from 'react'
import {Link} from 'react-router-dom'
import {FaListAlt} from "react-icons/fa"

import logo from '../images/noun.png'

import PageLinks from '../constants/links'

const Navbar = ({toggleSidebar}) => {
    return (
       <nav className="navbar">
           <div className="nav-center">

               {/* THE SECTION OF THE NAV HEADER LOGO */}
               <div className="nav-header">
                   <Link to="/">
                       <img src={logo} alt="header-logo"/>
                   </Link>
               </div>

               {/* THE SECTION OF THE TOOGLE BUTTON */}
               <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                   <FaListAlt/>
               </button>

               {/* THE SECTION OF THE PAGE LINKS */}
               {/* PASSING nav-links AS PROPS TO PAGELINKS */}
               <PageLinks styleClass="nav-links"/>   
           </div>
       </nav>
    )
}

export default Navbar
