import React from 'react'
import "./experience.css"
import XPCard from './XPCard'
import logo_enedis from "../../assets/logo_enedis.svg"
import logo_bnp from "../../assets/logo_bnp.svg"
import logo_worldline from "../../assets/logo_worldline.svg"
import logo_moneyline from "../../assets/logo_moneyline.png"
import logo_bluebeep from "../../assets/logo_bluebeep.png"
import logo_accenture from "../../assets/logo_accenture.svg"

const Experience = (props) => {

    const xp = [
        {
            id: 1,
            type: "Functional skills",
            title: "Development of a tool to overhaul the management of the electrical connection",
            tasks: [
                "Functional and technical analysis of User Stories",
                "Initialization and maintenance of the Business Object Model",
                "Specifications and interface contracts writing",
                "The conduct of Agile ceremonies (sprint planning, refinements)",
                "Testing of User Stories developed before delivery to the client"
            ],
            logoEmployer: logo_accenture,
            logoClient: logo_enedis
        },
        {
            id: 2,
            type: "Data / Dev skills",
            title: "Development of virtual assistants for a bank",
            tasks: [
                "Edition of technical architectures of the various virtual assistants",
                "Development of virtual assistants with Blue Prism",
                "Maintenance of the production park",
                "Migration of all virtual assistants from a fixed environment to a virtualized one",
                "Development of new features related to virtual assistants in JavaScript, C#, HTML/CSS",
                "Edition of deliverables: Test cases, Release Notes",
                "Hosting of training workshops, knowledge transfer"
            ],
            logoEmployer: logo_accenture,
            logoClient: logo_bnp
        }, 
        {
            id: 3,
            type: "Data / Dev skills",
            title: "Migration of the electronic payment terminals protocol",
            tasks: [
                "Development of functionalities respecting the specificities issued by the GIE CB in C ++",
                "Migration of electronic payment terminals to the new CBEMV5.5 protocol"
            ],
            logoEmployer: logo_worldline,
            logoClient: logo_worldline
        }, 
        {
            id: 4,
            type: "Data / Dev skills",
            title: "Mobile application development for cash deposit",
            tasks: [
                "Production of the architecture respecting customer needs",
                "Development of the cross-platform application on Xamarin"
            ],
            logoEmployer: logo_moneyline,
            logoClient: logo_moneyline
        }, 
        {
            id: 5,
            type: "Data / Dev skills", 
            title: "Development of an electronic child monitoring system",
            tasks: [
                "Development of the real-time child condition monitoring utility",
                "Development of the mobile application on Windev"
            ],
            logoEmployer: logo_bluebeep,
            logoClient: logo_bluebeep
        }
    ]

    const cards = xp.map(e => {
        return <XPCard
            key={e.id}
            id={e.id}
            type={e.type}
            title={e.title}
            tasks={e.tasks} 
            logoEmployer={e.logoEmployer} 
            logoClient={e.logoClient} 
            darkTheme={props.darkTheme}
        />
    })

    return (
        <div id='proExperience' className={`xp-container${props.darkTheme ? " dark" : ""}`}>
            <h5>- Professional experiences -</h5>
            <section className='xp-cards'>
                {cards}
            </section>
        </div>
    )
}

export default Experience