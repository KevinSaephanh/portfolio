const router = require("express").Router();
const nodemailer = require("nodemailer");
const validator = require("email-validator");
require("dotenv").config();

// Set up transporter to receive messages
const transport = {
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
};
const transporter = nodemailer.createTransport(transport);

// Verify that transporter is working
transporter.verify((error, success) => {
    if (error) console.error(error);
    else console.log("Server is ready to receive messages");
});

// Route messages to send email
router.post("/", async (req, res, next) => {
    const { name, email, message } = req.body;
    const content = `Name: ${name} \nEmail: ${email}\n Message: ${message}`;
    const mail = {
        from: email,
        to: process.env.EMAIL,
        subject: "Feedback/Question from portfolio",
        text: content,
    };

    // Validate email format
    if (!validator.validate(email))
        res.status(400).json({ message: "Invalid email" });

    transporter.sendMail(mail, (err, data) => {
        if (err) res.status(400).json({ message: "Failed to send email" });
        else res.status(200).json({ message: "Email successfully sent" });
    });
});

module.exports = router;
