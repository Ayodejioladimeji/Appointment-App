import React from 'react'
import { Particles } from 'react-particles-js';

import office from '../images/collaboration.svg'

const Complain = () => {
    return (
        <>
            <div className="complain">
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

                <div className="complain-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-md-12 col-sm-12 col-xs-12">
                                <img src={office} alt="" className="complain-image"/>
                            </div>

                            <div className="col-xl-7 col-md-12 col-sm-12 col-xs-12 px-4">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstname">FirstName</label>
                                            <input type="text" class="form-control" id="firstname" placeholder="input your firstname"/>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="lastname">LastName</label>
                                            <input type="text" class="form-control" id="lastname" placeholder="input your lastname"/>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="dept">Department</label>
                                            <input type="text" class="form-control" id="dept" placeholder="input your department"/>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="matric">Matric No</label>
                                            <input type="text" class="form-control" id="matric" placeholder="input your matric no"/>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="level">Level</label>
                                            <select id="level" class="form-control">
                                                <option selected>Choose Level</option>
                                                <option>100L</option>
                                                <option>200L</option>
                                                <option>300L</option>
                                                <option>400L</option>
                                                <option>500L</option>
                                                <option>600L</option>
                                                <option>700L</option>
                                                
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Write Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"/>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-block btn-outline-success text-size-4">COMPLAIN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Complain
