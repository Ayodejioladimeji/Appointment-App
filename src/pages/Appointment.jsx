import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Particles } from 'react-particles-js';
import office from '../images/office.svg'

// import M from 'materialize-css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particle from '../components/Particle';




const Appoinment = () => {

    // DECLARING THE STATES
    const history = useHistory()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [department, setDepartment] = useState('')
    const [matric, setMatric] = useState('')
    const [time, setTime] = useState('')
    const [level, setLevel] = useState('')
    const [photo, setPhoto] = useState('')
    const [message, setMessage] = useState('')
    const [url, setUrl] = useState('')


    // DECLARING THE USE EFFECT
    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method: "post",
                headers:{
                    "Content-Type":"application/json"
                    // "Authorization" : "Bearer "+localStorage.getItem('jwt')
                },
                body:JSON.stringify({
                    firstname,
                    lastname,
                    department,
                    matric,
                    time,
                    level,
                    photo:url,
                    message
                })
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.error){
                    toast.error(data.error)
                }
                else{
                   toast.success("Appointment successful");
                   alert("Appointment Successful")
                    history.push("/")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[url])

    // THE SECTION OF THE POSTING OF APPOINTMENT
    const postDetails = ()=>{
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "mr-adeyinka")
        data.append("cloud_name", "Sourcecode")
        fetch("https://api.cloudinary.com/v1_1/devsource/image/upload", {
            method: "post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.error){
               toast.error("The inputs cannot be empty")
           }else{
            setUrl(data.url)
           }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
            <div className="appointment">
                <ToastContainer/>
                <Particle/>
                <div className="appointment-center">
                <div className="container">
                        <div className="row">
                        <div className="col-xl-5 col-md-12 col-sm-12 col-xs-12">
                            <img src={office} alt="" className="appointment-image"/>
                        </div>

                        <div className="col-xl-7 col-md-12 col-sm-12 col-xs-12 px-4">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="firstname">FirstName</label>
                                            <input type="text" className="form-control" id="firstname" placeholder="input your firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="lastname">LastName</label>
                                            <input type="text" className="form-control" id="lastname" placeholder="input your lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="dept">Department</label>
                                            <input type="text" className="form-control" id="dept" placeholder="input your department" value={department} onChange={(e)=>setDepartment(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="matric">Matric No</label>
                                            <input type="text" className="form-control" id="matric" placeholder="input your matric no" value={matric} onChange={(e)=>setMatric(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="time">Time Schedule</label>
                                            <select id="time" className="form-control" value={time} onChange={(e)=>setTime(e.target.value)}>
                                                <option defaultValue>Choose Time</option>
                                                <option>9:00am - 9:20am</option>
                                                <option>9:20am - 9:40am</option>
                                                <option>9:40am - 10:00am</option>
                                                <option>10:00am - 10:20am</option>
                                                <option>10:20am - 10:40am</option>
                                                <option>10:40am - 11:00am</option>
                                                <option>11:00am - 11:20am</option>
                                                <option>11:20am - 11:40am</option>
                                                <option>11:40am - 12:00pm</option>
                                                <option>12:00pm - 12:20am</option>
                                                <option>12:20pm - 12:40pm</option>
                                                <option>12:40pm - 1:00pm</option>
                                                <option>1:00pm - 1:20pm</option>
                                                <option>1:20pm - 1:40pm</option>
                                                <option>1:40pm - 2:00pm</option>
                                                <option>2:00pm - 2:20pm</option>
                                                <option>2:20pm - 2:40pm</option>
                                                <option>2:40pm - 3:00pm</option>
                                                <option>3:00pm - 3:20pm</option>
                                                <option>3:20pm - 3:40pm</option>
                                                <option>3:40pm - 4:00pm</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label htmlFor="level">Level</label>
                                            <select id="level" className="form-control" value={level} onChange={(e)=>setLevel(e.target.value)}>
                                                <option defaultValue>Choose Level</option>
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

                                    <div className="form-group">
                                        <label htmlFor="image">Upload Image</label>
                                        <input type="file" className="form-control-file" id="image" onChange={(e)=>setPhoto(e.target.files[0])}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Write Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                    </div>

                                    <button type="submit" onClick={(e)=>postDetails(e.preventDefault())} className="btn btn-block btn-outline-success">BOOK APPOINTMENT</button>
                                </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Appoinment
