import React from 'react'

const Bubble = (props) => {
    return (
        <div className="skills-bubble">
            {props.text}
            <div className="triangle"></div>
        </div>
    )
}

export default Bubble