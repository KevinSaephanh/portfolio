const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Mail = require("./email");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

app.use("/api/email", Mail);

module.exports = app;
