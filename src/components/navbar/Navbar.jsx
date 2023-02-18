import React from 'react'
import "./navbar.css"

import { HiUser } from "react-icons/hi2"
import { BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsFillChatRightTextFill } from "react-icons/bs"
import { TbMessages } from "react-icons/tb"
import { RiMessage3Fill } from "react-icons/ri"
import { FiSun, FiMoon } from "react-icons/fi"

const Navbar = (props) => {

    return (
        <nav className={props.darkTheme ? "dark" : ""}>
            <div className={`nav-header${props.darkTheme ? " dark" : ""}`}>
                <a href='#about' ><HiUser />About me</a>
                <a href='#skills' ><BsFillBookmarkStarFill />Skills</a>
                <a href='#experiences' ><BsFillJournalBookmarkFill />Professional Experiences</a>
                <a href='#contact' ><BsFillChatRightTextFill />Contact me</a>
            </div>
            <div className='nav-theme' onClick={(event) => {
                event.stopPropagation()
                props.setDarkTheme(prevState => !prevState)
            }}>
                {!props.darkTheme && <span className='nav-theme-thumb-light'><FiSun /></span>}
                {props.darkTheme && <span className='nav-theme-thumb-dark'><FiMoon /></span>}
            </div>
        </nav>
    )
}

export default Navbar