import React from 'react'
import "./skills.css"

import Picture from "../../assets/profil.jpg"
import Bubble from './SkillBubble'

const Skills = ({ darkTheme }) => {
  return (
      <div id='skills' className={`container${darkTheme ? " dark" : ""}`}>
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
          </div>
      </div>
  )
}

export default Skills