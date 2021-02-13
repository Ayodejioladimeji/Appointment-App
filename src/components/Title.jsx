import React from "react"

const Title = ({title}) => {
  return (
    <div className="section-title">
      <h2 data-aos="fade-down">{title || "Featured Projects"}</h2>
      <div data-aos="fade-right" className="underline"></div>
    </div>
  )
}

export default Title
