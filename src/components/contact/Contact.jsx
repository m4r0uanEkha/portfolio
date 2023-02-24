import React from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { TbArrowBackUp } from "react-icons/tb"
import { RiArrowGoBackFill } from "react-icons/ri"
import { BiLoaderAlt } from "react-icons/bi"

const Contact = ({ darkTheme }) => {

    const [showForm, setShowForm] = React.useState(true);
    const [sendResult, setSendResult] = React.useState({
        text: "",
        step: 0,
        style: {
            backgroundColor: "none"
        }
    })

    const form = React.useRef();
    let text = ""

    const sendEmail = (event) => {
        event.preventDefault();

        setSendResult({ text: "Communicating with server..", step: 1, style: { backgroundColor: "#e34916" } })
        setShowForm(false)

        emailjs.sendForm('service_n02n3rp', 'contact_form', form.current, '_l0DxGYXUh0AGbiyc')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    setSendResult({ text: "Message sent successfully :)", step: 2, style: { backgroundColor: "#007644" } })
                }
                event.target.reset()
            }, (error) => {
                console.log(error.text);
                setSendResult({ text: "An error has occured : " + error.text, step: 2, style: { backgroundColor: "#bc1414" } })
            });
    };

    return (
        <div id='contact' className={`container${darkTheme ? " dark" : ""}`}>
            <h5>- Contact me -</h5>

            {showForm ?
                <form className='contact--form' ref={form} onSubmit={sendEmail}>
                    <input type={'text'} placeholder="Name" name="user_name" required />
                    <input type={'email'} placeholder="Email" name="user_email" required />
                    <input type={'text'} placeholder="Subject" name="subject" required />
                    <textarea placeholder="Message" name="message" maxLength="500" required />
                    <button type='submit' className='contact--btn'>Send</button>
                </form> :

                <>
                    <div className="contact--toast" style={sendResult.style}>
                        <h4>{sendResult.text}</h4>
                        {sendResult.step === 1 && <BiLoaderAlt className='contact--toast-loader'/>}
                    </div>
                    {sendResult.step === 2 && <button className='contact--back' onClick={() => setShowForm(true)}><RiArrowGoBackFill /></button>}
                </>
            }

        </div>
    )
}

export default Contact