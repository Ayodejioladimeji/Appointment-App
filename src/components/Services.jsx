import React from "react"
import services from "../constants/services"


const Services = () => {
  return (
    <section className="section">
      <div className="section-center services-center">
        {services.map((service)=>{
          const {id, icon, title} = service;
          return(
            <article key={id} className="service" data-aos="zoom-in">
              {icon}
              <h4 data-aos="fade-up">{title}</h4>
              <div data-aos="fade-right" className="underline"></div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
