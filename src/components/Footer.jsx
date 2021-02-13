import React from "react"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>
          copyright&copy; {new Date().getFullYear()} <span><Link to="/signup" className="mr-ade">MR-ADEYINKA</Link></span>
        </h4>
        <h3>NATIONAL OPEN UNIVERSITY OF NIGERIA</h3>
        <small className="layo">Developed By @LayoBright <span role="img">&#128526;</span></small>
      </div>
    </footer>
  )
}

export default Footer