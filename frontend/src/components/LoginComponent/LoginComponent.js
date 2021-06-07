import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import './LoginComponent.css'
const LoginComponent = () => {
    return (
        <div className="logincomponent-wrapper">
            <div className="login-text">login</div>
            <InputComponent label="Email"/>
            <InputComponent label="password" side="Forget password"/>
            
            <button className="login-button">Login</button>
            <div className="sign-up-text">Don’t have an account yet? <span style={{fontWeight:"bold"}}>Signup</span></div>
        </div>
    )
}

export default LoginComponent
