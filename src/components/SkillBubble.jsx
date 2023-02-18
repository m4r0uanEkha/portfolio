import React from 'react'
import { FaLocationArrow } from "react-icons/fa"

const Bubble = (props) => {
    return (
        <div className="skill-bubble">
            {props.text}
            {/* <div className="triangle"></div> */}
            <FaLocationArrow className="skill-bubble-arrow" />
        </div>
    )
}

export default Bubble