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
            <div className={`nav--header${props.darkTheme ? " dark" : ""}`}>
                <ul className='nav--header-list'>
                    <li><a href='#about' ><HiUser />About me</a></li>
                    <li><a href='#skills' ><BsFillBookmarkStarFill />Skills</a></li>
                    <li><a href='#experiences' ><BsFillJournalBookmarkFill />Professional Experiences</a></li>
                    <li><a href='#contact' ><BsFillChatRightTextFill />Contact me</a></li>
                </ul>
                
            </div>
            <div className='nav--toggle' onClick={(event) => {
                event.stopPropagation()
                props.setDarkTheme(prevState => !prevState)
            }}> 
                {!props.darkTheme && <span className='nav--toggle-thumb-light'><FiSun /></span>}
                {props.darkTheme && <span className='nav--toggle-thumb-dark'><FiMoon /></span>}

            </div>
        </nav>
    )
}

export default Navbar