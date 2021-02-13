import React, {useState, useContext} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {UserContext} from '../App'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Particle from './Particle';


const Login = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = ()=>{
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error("Invalid Email")
            return
        }

        fetch("/signin",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            
            },
            body:JSON.stringify({
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
                localStorage.setItem('jwt', data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                toast.success("signedin successfully");
                history.push('/')
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
                            <div className="col-xl-4 col-md-8 col-sm-12 col-xs-12 px-4 mx-auto">
                                <h3 className="text-center login-heading">LOGIN HERE</h3>
                                <form>
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

                                    <button type="submit" onClick={(e)=>PostData(e.preventDefault())} class="btn btn-primary btn-block btn-outline-success">LOGIN</button>
                                </form>

                                <Link to="/signup" className="signin">
                                    <p>Click here to signup</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
