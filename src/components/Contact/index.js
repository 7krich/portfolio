import React, { useState } from 'react';
// import validate email function
import { validateEmail } from '../../utils/helpers';
import { capitalizeFirstLetter } from '../../utils/helpers';

function ContactForm(props) {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const { currentCategory } = props;

    // sync the internal state of the component formState with the user input from the DOM
    // onChange event listener will ensure that the handleChange function fires when keystroke is typed into input field
    function handleChange(e) {
        // validate e-mail
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if(!isValid) {
                setErrorMessage('your email is invalid');
            } else {
                // if valid, err msg is empty string
                setErrorMessage('');
            }
        } else {
            // if message or name element values are blank
            if(!e.target.value.length) {
                // send err msg
                setErrorMessage(`${e.target.name} is required`);
                // if not empty, err msg is empty string
            } else {
                setErrorMessage('');
            }

            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }
        
        // dynamically obtain keystrokes from each given form element
        // e.target.name -> name refers to the name attribute for the form elements (name, email, message)
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    // handle submission of the form
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return(
        <section className="contact">
            <div className="title-container">
                <h1 className="page-title-text">{capitalizeFirstLetter(currentCategory.name)}</h1>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="center">
                    <div>
                        <label htmlFor="name" className="field-title" >Name:</label>
                        <input type="text" placeholder="Full Name" className="text-field" defaultValue={name} name="name" onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email" className="field-title">Email address:</label>
                        <input type="email" placeholder ="example@gmail.com" className="text-field" defaultValue = {email} name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message" className="field-title">Message:</label>
                        <textarea name="message" placeholder="Your message here..." className="text-field" defaultValue = {message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="form-button" type="submit">SUBMIT</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm