import React from 'react'
import LoginComponent from '../components/LoginComponent/LoginComponent'
import Logo from '../components/Logo/Logo'
import TermsCondition from '../components/TermsCondition/TermsCondition'
import './Login.css'
import bubble1 from '../Images/Bubble2.svg'
import ilus from '../Images/Login.svg'
import ybubble from '../Images/Yellow Bubble.svg'

const Login = () => {
    return (
        <div className="login-wrapper">
            
            <img alt="no text" src={bubble1} className="bubble1"></img>
            
            <img alt="no text" src={ybubble} className="yellow-bubble"></img>
            <div className="login-component-wrapper">
                <Logo/>
                <LoginComponent/>
            </div>
            <TermsCondition/>
            <div className="ilustration-wrapper">
                <button className="test-button">Test</button>
                <div className="ilus-title">Unlock your stuck revenue.</div>
                <div className="ilus-description">We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</div>
                <img alt="no text" src={ilus} className="ilus-svg"></img>
            </div>
        </div>
    )
}

export default Login
