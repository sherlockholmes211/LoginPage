import React from 'react'
import './TermsCondtion.css'
import bubble from '../../Images/Bubble.svg'
const TermsCondition = () => {
    return (
        <>  
        <div className="term-control"></div>
            <div className="terms-wrapper">
                <div className="terms-text">Terms of Service</div>
                <div className="terms-text-abs">
                    <div>Privacy Policy</div>
                    <img alt="jkdf" src={bubble} className="bubble2"></img>
                </div>   
            </div>
        </>
    )
}

export default TermsCondition
