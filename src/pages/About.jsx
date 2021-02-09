import React from "react"
import Title from "../components/Title"
import about from '../constants/about'
import Footer from './../components/Footer';

const About = () => {
  return (
     <>
        <section className="about-page">
        <div className="about-center">
          {about.map((item)=>{
            const {title, info, image, name, num} = item
            return(
              <>
                <div className="div">
                  <img src={image} alt="about-me" className="about-img"/>
                  <h2>{name}</h2>
                  <h5>{num}</h5>
                </div>

                <article className="about-text">
                  <Title title={title}/>
                  <p data-aos="flip-right">{info}</p>
                </article> 
              </>
            )
          })}
        </div>
      </section> 
      <Footer/>
     </>
  )
}

export default About