import React from 'react'
import {Link} from 'react-router-dom'

import Particles from 'react-particles-js'

import ade from '../images/ade.jpeg'

const Hero = () => {
    return (
        <header className="hero">
            <Particles id="particles-js"
                params={{ 
                    "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                        "enable": true,
                        "value_area": 700
                        }
                    },
                    "color": {
                        "value": "#249928"
                    },
                    "shape": {
                        "type": "edge",
                        "stroke": {
                        "width": 0,
                        "color": "#249928"
                        },
                        "polygon": {
                        "nb_sides": 5
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                        "enable": false,
                        "speed": 30,
                        "size_min": 0.1,
                        "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#00ff00",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1.5782952832645452,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                        }
                    }
                    },
                }} 
            /> 
            <div className="hero-center">
                <article className="hero-info">
                    <p className="que">Are you tired of queuing ?</p>
                    <div className="hero-div">
                        <h3>Meet</h3>
                        <h3>Your</h3>
                        <h1 data-aos="zoom-in">Counsellor</h1>
                        <h3>Today</h3>

                        <div data-aos="fade-up">
                            <Link to="/appointment">
                                <button className="btn">Book Appointment</button>
                            </Link>
                        </div>
                    
                    </div>
                </article>
                   
                {/* <div className="name">
                    <h3>Mr Adeyinka</h3>
                    <h3>08033487398</h3>
                </div> */}
                <img src={ade} alt="hero-img" className="hero-img"/>
                
            </div>
        </header>
    )
}

export default Hero
