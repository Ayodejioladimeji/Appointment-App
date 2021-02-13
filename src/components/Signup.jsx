import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particle from './Particle';


const Signup = () => {
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = ()=>{
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error("Invalid Email")
            return
        }

        fetch("/signup",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                toast.error(data.error)
            }
            else{
               toast.success(data.message);
                history.push('/login')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
            <div className="login">
                <ToastContainer/>
                  
                <Particle/>
                <div className="login-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                <h3 className="text-center login-heading">REGISTER HERE</h3>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label htmlFor="fullname">FullName</label>
                                            <input type="text" class="form-control" id="fullname" placeholder="input your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" class="form-control" id="email" placeholder="input your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" class="form-control" id="password" placeholder="input your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                        </div>
                                    </div>

                                    <button type="submit" onClick={(e)=>PostData(e.preventDefault())} class="btn btn-primary btn-block btn-outline-success text-size-4 mb-4">REGISTER</button>
                                </form>

                                <Link to="/login" className="signin">
                                    <p>Click here to login</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
