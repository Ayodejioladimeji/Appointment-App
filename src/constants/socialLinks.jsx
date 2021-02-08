import React from "react"

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://web.facebook.com/alayosingers",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/layobright",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/Ayodejioladimeji",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/LayoBright",
  },
  {
    id: 6,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://dribbble.com/LayoBright",
  },
]


const links = data.map(link => {
    const {id, url, icon} = link
  return (
    <li key={id}>
      <a href={url} className="social-link">
        {icon}
      </a>
    </li>
  )
})

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
