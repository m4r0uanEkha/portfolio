import React from 'react'
import "./footer.css"
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs"
import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"

const Footer = (props) => {
    return (
        <div className={`footer-container${props.darkTheme ? " dark" : ""}`}>
            <div className="links">
                <a href='https://www.linkedin.com/in/marouane-khatar/' target={'_blank'}><BsLinkedin /></a>
                <a href='https://twitter.com/' target={'_blank'}><FaTwitterSquare /></a>
                <a href='https://www.instagram.com/' target={'_blank'}><FaInstagramSquare /></a>
                <a href='https://www.facebook.com/' target={'_blank'}><FaFacebookSquare /></a>
            </div>
            <small>Made by Marouane Khatar</small>
        </div>
    )
}

export default Footer