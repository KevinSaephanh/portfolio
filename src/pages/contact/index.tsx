import React, { useRef } from 'react';
import validator from 'email-validator';
import * as emailjs from 'emailjs-com';
import config from '../../config/config';
import { Input } from '../../components/ui/Input/Input';
import { TextArea } from '../../components/ui/TextArea/TextArea';

const Contact = () => {
  const inputs = useRef({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = React.useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if email is using valid format
    if (!isValidForm()) {
      setSubmitMessage('Please fill out all fields in the form');
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }

    emailjs
      .sendForm('gmail', config.email.templateId, '.myForm', config.email.userId)
      .then((res) => {
        setSubmitMessage('Message sent successfully!');
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch((err) => {
        console.error(err);
        setSubmitMessage('Failed to send message 😞');
        setTimeout(() => setSubmitMessage(''), 3000);
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
        <form className="myForm">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            label="Name"
            minLength={3}
            maxLength={100}
            onChange={handleInput}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            minLength={7}
            maxLength={100}
            onChange={handleInput}
            required
          />
          <TextArea
            type="text"
            name="message"
            placeholder="Speak your mind 😊"
            label="Message"
            minLength={5}
            maxLength={300}
            onChange={handleInput}
            required
          />
          <span className="submitMessage">{submitMessage}</span>
          <button onClick={sendEmail} disabled={!isValidForm()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
