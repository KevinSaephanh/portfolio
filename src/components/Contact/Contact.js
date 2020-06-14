import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <form>
                <label>Name: </label>
                <input maxLength="100" required />
                <label>Email: </label>
                <input maxLength="100" required />
                <label maxLength="300" required>
                    Message:
                </label>
                <textarea />
            </form>
        </div>
    );
};

export default Contact;
