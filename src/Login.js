import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Dashboard from "./Components/Dashboard";

function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    var name = localStorage.getItem('UserName')
    console.log("session value", name);

    function login (e)  {
        let newuser = username;
        let userpassword = password;
        localStorage.setItem('UserName', newuser);
        localStorage.setItem('UserPass', userpassword);
        var name = localStorage.getItem('UserName')
        if(name!== ""){
            window.location('/navbar')
        }else {
            props.history.push("/dashboard");
        }
    };

    return (
        <>
            {name?<Dashboard />:
                <Container fluid className='div'>
                    <div className='login-parent'>
                        <div className='login-div'>
                            <div className='login-text'>
                            <h2>User Login</h2>
                            </div>
                            <div className='login-form'>
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="email" className="form-control"
                                    value={username}
                                    onChange={(e)=>setUserName(e.target.value)} 
                                    placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)} 
                                    placeholder="Enter password" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block log-btn" >Login</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </Container> 
            }
        </>
    )
}

export default Login;