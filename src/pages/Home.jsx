import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Section from './../components/Section';


import one from '../images/section1.png'
import two from '../images/section2.png'
import three from '../images/section3.png'
import four from '../images/section4.png'
import five from '../images/section5.png'
import Aside from './../components/Aside';
import Footer from './../components/Footer';
import Title from './../components/Title';

const Home = () => {
    return (
        <div>
            <Hero />
            <Title title="Daily Agenda" />
            <Services />
            <Section text="Are you experiencing educational, vocational, career or personal/social problem? consult the counsellor" button="Book Appointment" img={one} />
            <Aside text="You are in safe Hands, Bare your mind to the counsellor,He can help you with your problems" button="Get Intouch" img={two} />
            <Section text="A problem shared is half-solved, share your problems with the counsellor" button="Book Appointment" img={three} />
            <Aside text="Are you experiencing challenges on your studies ? contact the counsellor" button="Get Intouch" img={four} />
            <Section text="Confidential is our watchword, keep our secret a SECRET  - Reach out to your counsellor" button="Book Appointment" img={five} />
            <Footer />
        </div>
    )
}

export default Home
