import React, { useState } from "react";
//import {Link} from 'react-router-dom'
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        fetch("http://localhost:5000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                pass
            }),
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userRegister");
                if(data.status==="ok"){
                    console.log(data.status,"yes");
                    window.location.href="/book";
                }
                else if(data.status==="invalid password"){
                    alert("Invalid Password");
                }
                else if(data.status==="user not found"){
                    alert("User not found");
                }
            })
    }
    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <a className="link-btn" href='/register'>Don't have an account? Register here.</a>
        </div>
    )
}
export default Login