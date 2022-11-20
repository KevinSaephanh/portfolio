import React, { useRef } from 'react';
import validator from 'email-validator';
import * as emailjs from 'emailjs-com';
import config from '../../config/config';

const Contact = () => {
  const inputs = useRef({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = React.useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if email is using valid format
    if (!isValidForm()) {
      setSubmitMessage('Please fill out all fields in the form');
      setTimeout(() => setSubmitMessage(null), 3000);
      return;
    }

    emailjs
      .sendForm('gmail', config.email.templateId, '.myForm', config.email.userId)
      .then((res) => {
        setSubmitMessage('Message sent successfully OwO');
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch((err) => {
        console.error(err);
        setSubmitMessage('Failed to send message 😞');
        setTimeout(() => setSubmitMessage(null), 3000);
      });
  };

  const isValidForm = () => {
    const { name, email, message } = inputs.current;
    return (
      name.length > 1 &&
      name.length <= 50 &&
      email.length >= 5 &&
      email.length <= 100 &&
      validator.validate(email) &&
      message.length >= 1 &&
      message.length <= 300
    );
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    inputs.current[name] = value;
  };

  return (
    <div>
      <h2 className="title">CONTACT ME</h2>
      <div className="contact-content">
        <div id="slime" title="Slime from Maplestory made with CSS">
          <div className="antenna">∿∿∿</div>
          <div className="eye1">+</div>
          <div className="eye2">+</div>
          <div className="mouth">w</div>
        </div>
        <form className="myForm" onSubmit="return false;">
          <input
            type="text"
            name="name"
            placeholder="Name"
            title="Name"
            minLength="3"
            maxLength="100"
            required
            onChange={handleInput}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            title="Email"
            minLength="5"
            maxLength="100"
            required
            onChange={handleInput}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Speak your mind :3"
            title="Message"
            minLength="10"
            maxLength="300"
            onChange={handleInput}
            required
          />
          <span className="submitMessage">{submitMessage}</span>
          <button type="input" onClick={sendEmail} disabled={!isValidForm()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
