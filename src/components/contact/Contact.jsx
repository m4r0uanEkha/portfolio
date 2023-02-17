import React from 'react'
import "./contact.css"

const Contact = (props) => {

    const submit = (event) => {
        event.preventDefault()
    }

    return (
        <div id='contact' className={`contact-container${props.darkTheme ? " dark" : ""}`}>
            <h5>- Contact me -</h5>
            <form onSubmit={submit}>
                <input type={'text'} placeholder="Subject" />
                <input type={'email'} placeholder="Email" />
                <textarea placeholder="Message body" />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact