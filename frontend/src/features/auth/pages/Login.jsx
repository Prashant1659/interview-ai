import React from 'react'
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import '../auth.form.scss'
function Login() {

    const { loading, handleLogin, user } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await handleLogin({email,password})
        navigate('/')
    }

    if(user){
        navigate('/')
    }

    if(loading){
        return <main> loading.....</main>
    }
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                     type="email" name="email" id="email" placeholder='enter email address'/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                     onChange={(e) => setPassword(e.target.value)}
                     type="password" name="password" id="password" placeholder='enter password' />
                </div>
                <button className="button primary-button" type="submit">Login</button>
            </form>

            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
    </main>
  )
}

export default Login