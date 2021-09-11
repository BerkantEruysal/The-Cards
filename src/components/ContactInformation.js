import React from 'react'

const ContactInformation = (props) => {
    return (
        <div className="contact-information">
            <p>My Github : <a href="https://github.com/BerkantEruysal" target="_blank">BerkantEruysal</a></p>
            <p>My Linkedin : <a href="https://www.linkedin.com/in/berkant-eruysal-450b89208/" target="_blank">BerkantEruysal</a></p>
            <p>My Email : <a href="mailto:berkanteruysal@hotmail.com">BerkantEruysal@hotmail.com</a></p>
            <button onClick={() => {props.setScreen("welcome-page")}}>Go Back</button>
        </div>
    )
}

export default ContactInformation
