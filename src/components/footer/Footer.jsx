import React from 'react'
import "./footer.css"
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs"

const Footer = (props) => {
    return (
        <div className={`footer-container${props.darkTheme ? " dark" : ""}`}>
            <div className="links">
                <a href='https://www.linkedin.com/in/marouane-khatar/' target={'_blank'}><BsLinkedin /></a>
                <a href='https://twitter.com/' target={'_blank'}><BsTwitter /></a>
                <a href='https://www.instagram.com/' target={'_blank'}><BsInstagram /></a>
                <a href='https://www.facebook.com/' target={'_blank'}><BsFacebook /></a>
            </div>
            <small>Made by Marouane Khatar</small>
        </div>
    )
}

export default Footer