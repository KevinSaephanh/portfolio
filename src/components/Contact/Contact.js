import React from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
    const [inputs, setInputs] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const sendEmail = async (e) => {
        e.preventDefault();

        const { name, email, message } = inputs;
        const res = await axios.post("/api/email", {
            name,
            email,
            message,
        });

        if (res.data) console.log("SUCCESS");
        else console.log("BAD");
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
                <button type="input" onClick={sendEmail}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
