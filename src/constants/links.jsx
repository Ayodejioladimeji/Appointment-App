import React from 'react'
import {Link} from 'react-router-dom'

const data = [
    {
        id: 1,
        text: 'Home',
        url: "/"
    },
    {
        id: 2,
        text: 'About',
        url: "/about/"
    },
    {
        id: 3,
        text: 'Appointment',
        url: "/appointment/"
    },
    {
        id: 4,
        text: 'Announcement',
        url: "/announcement/"
    },
    {
        id: 5,
        text: 'Complain',
        url: "/complain/"
    }
]


// MAPPING THROUGH THE LINKS
const tempLinks = data.map(link=>{
    const {id, text, url} = link
    return(
        <li key={id}>
            <Link to={url}>{text}</Link>
        </li>
    )
})

// eslint-disable-next-line import/no-anonymous-default-export
export default ({styleClass}) =>{
    return(
        <ul className= {`page-links ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}