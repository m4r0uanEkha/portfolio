import React from 'react'
import "./navbar.css"

import { HiUser } from "react-icons/hi2"
// import { BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsFillChatRightTextFill } from "react-icons/bs"
import { MdMobileFriendly, MdMenu, MdClose, MdBook, MdBookmark, MdPerson, MdMail } from "react-icons/md"

import { FiSun, FiMoon } from "react-icons/fi"

const Navbar = ({ darkTheme, setDarkTheme }) => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className={darkTheme ? "dark" : ""}>

            <div className={`nav--header${darkTheme ? " dark" : ""}`}>

                <div className="nav--burger">
                    <MdMobileFriendly className={toggleMenu ? "nav--invisible-icon" : ""} fontSize={30} />
                    {
                        toggleMenu ?
                            <MdClose fontSize={35} onClick={() => setToggleMenu(false)} /> :
                            <MdMenu fontSize={35} onClick={() => setToggleMenu(true)} />
                    }
                </div>

                {
                    toggleMenu &&
                    <ul className='nav--small-menu'>
                        <li><a href='#about' ><MdPerson fontSize={20} />About me</a></li>
                        <li><a href='#skills' ><MdBookmark fontSize={20} />Skills</a></li>
                        <li><a href='#experiences' ><MdBook fontSize={20} />Professional Experiences</a></li>
                        <li><a href='#contact' ><MdMail fontSize={20} />Contact me</a></li>
                    </ul>
                }

                <ul className='nav--header-list'>
                    <li><a href='#about' ><MdPerson fontSize={25} />About me</a></li>
                    <li><a href='#skills' ><MdBookmark fontSize={25} />Skills</a></li>
                    <li><a href='#experiences' ><MdBook fontSize={25} />Professional Experiences</a></li>
                    <li><a href='#contact' ><MdMail fontSize={25} />Contact me</a></li>
                </ul>

            </div>
            {/* <div className='nav--toggle' onClick={(event) => {
                // event.stopPropagation()
                setDarkTheme(prevState => !prevState)
            }}>
                {!darkTheme && <span className='nav--toggle-thumb light'><FiSun /></span>}
                {darkTheme && <span className='nav--toggle-thumb dark'><FiMoon /></span>}

            </div> */}

            <label className='nav--toggle'>
                <input type="checkbox" onChange={() => setDarkTheme(prevState => !prevState)} />
                <span className="nav--toggle-thumb">
                    {
                        darkTheme ? <FiMoon /> : <FiSun />
                    }
                </span>
            </label>

        </nav>
    )
}

export default Navbar