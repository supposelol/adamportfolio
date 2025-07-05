import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_1jyortf',
            'template_9pn6gfl',
            formRef.current,
            '70gERZ062Mh-dvhpG'
        )
        .then((result) => {
            alert("Message Sent Successfully!");
            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            });
        }, (error) => {
            alert("An error occurred, please try again later.");
            console.error('Error sending email:', error);
        });
    };

    return (
        <section id="contact">
        <div className="contact-section">
            <div className="contact-form">
                <h3 className="contact-title">Get in Touch</h3>
                <form className="form" ref={formRef} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="user_name" className="formText">Name</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email" className="formText">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="formText">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </div>
        </section>
    );
};

export default Contact;