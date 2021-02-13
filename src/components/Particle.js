import React from 'react'
import { Particles } from 'react-particles-js';

const Particle = () => {
    return (
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
    )
}

export default Particle
