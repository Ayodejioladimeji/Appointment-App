import React from 'react'
import {Link} from 'react-router-dom'

import ade from '../images/ade.jpeg'
import Particle from './Particle';

const Hero = () => {
    return (
        <header className="hero">
            <Particle/>
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
                   
                <img src={ade} alt="hero-img" className="hero-img"/>
                
            </div>
        </header>
    )
}

export default Hero
