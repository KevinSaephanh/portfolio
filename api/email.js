const router = require("express").Router();
const nodemailer = require("nodemailer");
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
    console.log(req.body);
    const content = `Name: ${name} \nEmail: ${email}\n Message: ${message}`;
    const mail = {
        from: email,
        to: process.env.EMAIL,
        subject: "Feedback/Question from portfolio",
        text: content,
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) res.json({ message: "Failed to send email" });
        else res.json({ message: "Email successfully sent" });
    });
});

module.exports = router;
