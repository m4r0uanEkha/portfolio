import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'

const App = () => {

    const [darkTheme, setDarkTheme] = React.useState(true)

    return (
        <>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <div className={`main${darkTheme ? " dark" : ""}`}>
                <About darkTheme={darkTheme} />
                <Skills darkTheme={darkTheme} />
                <Experience darkTheme={darkTheme} />
                <Contact darkTheme={darkTheme} />
                <Footer darkTheme={darkTheme} />
            </div>
        </>
    )
}

export default App