import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimesCircle } from "react-icons/fa"
import '../styles/Sidebar.css'



const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimesCircle />
      </button>

      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
