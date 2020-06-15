import React from "react";
import "./Contact.css";

const Contact = () => {
    const [inputs, setInputs] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const sendEmail = () => {
        const { name, email, message } = inputs;
    };

    const handleInput = (e) => {
        const { name } = e.target;
        const { value } = e.target;
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
            <form>
                <input
                    placeholder="Name"
                    title="Name"
                    maxLength="100"
                    required
                />
                <input
                    placeholder="Email"
                    type="email"
                    title="Email"
                    maxLength="100"
                    required
                />
                <textarea
                    placeholder="Speak your mind :3"
                    title="Message"
                    maxLength="300"
                    required
                />
                <button type="button" onClick={sendEmail}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
