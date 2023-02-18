import React from 'react'

const Contact = (props) => {

    const submit = (event) => {
        event.preventDefault()
        console.log("email service not implemented yet :)")
    }

    return (
        <div id='contact' className={`container${props.darkTheme ? " dark" : ""}`}>
            <h5>- Contact me -</h5>
            <form className='contact-form' onSubmit={submit}>
                <input type={'text'} placeholder="Subject" />
                <input type={'email'} placeholder="Email" />
                <textarea placeholder="Message body" />
                <button type='submit' disabled={true}>Send</button>
            </form>
        </div>
    )
}

export default Contact