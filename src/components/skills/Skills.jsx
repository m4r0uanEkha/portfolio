import React from 'react'
import "./skills.css"

import Picture from "../../assets/profil.jpg"
import Bubble from './Bubble'

const Skills = (props) => {
  return (
      <div id='skills' className={`skills-container${props.darkTheme ? " dark" : ""}`}>
          <h5>- Skills -</h5>
          <img src={Picture} alt="profil" className='skills-img' />
          <div className="skills-grid">
              <Bubble text="Design engineering" />
              <Bubble text="Application development" />
              <Bubble text="SCRUM" />
              <Bubble text="Javascript" />
              <Bubble text="ReactJS" />
              <Bubble text="Agile methodology" />
              <Bubble text="Android" />
              <Bubble text="Python" />


              {/* <div className="skills-bubble">Design engineering<div className="triangle"></div></div>
              <div className="skills-bubble">Application development</div>
              <div className="skills-bubble">SCRUM</div>
              <div className="skills-bubble">Javascript</div>
              <div className="skills-bubble">ReactJS</div>
              <div className="skills-bubble">Agile methodology</div>
              <div className="skills-bubble">Android</div>
              <div className="skills-bubble">Python</div> */}
          </div>
      </div>
  )
}

export default Skills