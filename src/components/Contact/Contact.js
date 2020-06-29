import React from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";

const emailPattern = new RegExp("/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/");

const Contact = () => {
    const [inputs, setInputs] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitMessage, setSubmitMessage] = React.useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        // Check if email is using valid format
        if (!emailPattern.test(inputs.email)) {
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

    const handleInput = (e) => {
        const { name } = e.target;
        const { value } = e.target;

        setInputs({ ...inputs, [name]: value });
    };

    return (
        <div className="contact">
            <div
                className="slime"
                title="Poorly drawn Slime from Maplestory using CSS"
            >
                <div className="antenna">∿∿∿</div>
                <div className="eye1">+</div>
                <div className="eye2">+</div>
                <div className="mouth">w</div>
            </div>
            <form onSubmit={sendEmail} className="myForm">
                <input
                    name="name"
                    placeholder="Name"
                    title="Name"
                    maxLength="100"
                    required
                    onChange={handleInput}
                />
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    title="Email"
                    maxLength="100"
                    required
                    onChange={handleInput}
                />
                <textarea
                    name="message"
                    placeholder="Speak your mind :3"
                    title="Message"
                    maxLength="300"
                    onChange={handleInput}
                    required
                />
                <span className="submitMessage">{submitMessage}</span>
                <button type="input" onClick={sendEmail}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
