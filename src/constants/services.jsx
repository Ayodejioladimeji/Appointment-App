import React from "react"

import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    icon: <img src={one} alt="one"/>,
    title: "ACADEMIC SUPPORT",
  },
  {
    id: 2,
    icon: <img src={two} alt="two"/>,
    title: "SOLUTION ANATOMY",
  },
  {
    id: 3,
    icon: <img src={three} alt="three"/>,
    title: "GRADATION SOLUTIONS",
  },
  {
    id: 4,
    icon: <img src={four} alt="four"/>,
    title: " PROBLEM SOLVING",
  },
]
