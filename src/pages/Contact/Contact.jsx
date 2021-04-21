import React from "react";
import validator from "email-validator";
import * as emailjs from "emailjs-com";
import "./Contact.scss";
// Convert to popup modal?
const Contact = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if email is using valid format
    if (!validateForm()) {
      setSubmitMessage("Failed to send message 😞");
      setTimeout(() => {
        setSubmitMessage("");
      }, 2000);
      return;
    }

    emailjs
      .sendForm(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID,
        ".myForm",
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        setSubmitMessage("Message sent successfully UwU");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const validateForm = () => {
    const { name, email, message } = inputs;
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
    const { name } = e.target;
    const { value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div>
      <h2>CONTACT ME</h2>
      <div className="contact-content">
        <div
          className="slime"
          title="Poorly drawn Slime from Maplestory using CSS"
        >
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
          <button
            type="input"
            onClick={sendEmail}
            disabled={submitMessage !== ""}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
