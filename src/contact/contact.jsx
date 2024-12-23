import React from 'react';
import './contact.css';
import nameCardImage from '../assets/nameCard.png'; // Path to your name card image

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-form">
                <h3 className="contact-title">Vedd fel velem a kapcsolatot!</h3>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name" className='formText'>Név</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='formText'>Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className='formText'>Mobil</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject" className='formText'>Téma</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className='formText'>Üzenet</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Küldés</button>
                </form>
            </div>
            <div className="contact-image">
                <img src={nameCardImage} alt="Name Card" />
            </div>
        </div>
    );
};

export default Contact;