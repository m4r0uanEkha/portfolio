import React from 'react'
import { FaLocationArrow } from "react-icons/fa"

const Bubble = ({ text }) => {
    return (
        <div className="skill-bubble">
            {text}
            <FaLocationArrow className="skill-bubble-arrow" />
        </div>
    )
}

export default Bubble