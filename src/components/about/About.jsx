import React from 'react'
import "./about.css"
import Picture from "../../assets/picture_from_side.jpg"
import { MdLanguage } from "react-icons/md"
import { FaPaintBrush } from "react-icons/fa"
import { BsBoxArrowUpRight } from "react-icons/bs"

const About = ({ darkTheme }) => {
    return (
        <div id='about' className={`container${darkTheme ? " dark" : ""}`}>
            <h5>- About me -</h5>
            <h1>Marouane Khatar<a href='https://repertoire.iesf.fr/#profile/ae616229b1435b08172b1a2f6598148c' target={'_blank'}><BsBoxArrowUpRight /></a></h1>
            <h3>Software engineer</h3>
            <div className="about-details">
                <img src={Picture} alt="my_picture" className='about-img' />
                <div className="about-texts">
                    <article>
                        With more than 4 years of experience working at Acctenture Technology Solutions and with other clients, I was able to be part of large-scale projects.
                        Whether it was on a technical role or business based one, with commitment and responsibilities assumption I was able to complete all projects under my responsibility with respect of deadlines and expectations in terms of quality.
                    </article>
                    <h5><MdLanguage/> Spoken languages</h5>
                    <small>Arabic [Mother tongue]</small>
                    <small>English [Fluent]</small>
                    <small>French [Fluent]</small>
                    <small>German [A1 - A2 level]</small>
                    <h5><FaPaintBrush />Hobbies</h5>
                    <small>Traveling [Morocco, France, Spain, Belgium]</small>
                    <small>Sports [Football, Climbing]</small>
                </div>
            </div>
        </div>
    )
}

export default About