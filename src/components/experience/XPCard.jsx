import React from 'react'
import "./xpcard.css"

const XPCard = (props) => {
    const { id, title, type, tasks, logoEmployer, logoClient, darkTheme } = props
    const liElements = tasks.map((task, index) => <li key={index + id * 10}>{task}</li>)
    return (
        <div className={`xp-card${darkTheme ? " dark" : ""}`}>
            <h5>{type}</h5>
            <h2>{title}</h2>
            {logoEmployer !== logoClient ?
                <>
                    <h5>Employer</h5>
                    <img src={logoEmployer} alt="logoEmployer" />
                    <h5>Client</h5>
                </>
                : null}
            <img src={logoClient} alt="logoClient" />
            <ul>
                {liElements}
            </ul>
        </div>
    )
}

export default XPCard