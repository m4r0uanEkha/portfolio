import React from 'react'
import "./skills.css"

import Picture from "../../assets/profil.jpg"

const Skills = (props) => {
  return (
      <div id='skills' className={`skills-container${props.darkTheme ? " dark" : ""}`}>
          <h5>- Skills -</h5>
          <img src={Picture} alt="profil" className='skills-img' />
          <div className="skills-grid">
              <div className="skills-bubble">Design engineering</div>
              <div className="skills-bubble">Application development</div>
              <div className="skills-bubble">SCRUM</div>
              <div className="skills-bubble">Javascript</div>
              <div className="skills-bubble">ReactJS</div>
              <div className="skills-bubble">Agile methodology</div>
              <div className="skills-bubble">Android</div>
              <div className="skills-bubble">Python</div>
          </div>
      </div>
  )
}

export default Skills