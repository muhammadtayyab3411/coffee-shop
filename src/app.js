require("dotenv").config();
const {urlencoded} = require("body-parser");
const express = require("express");
const app = express();
require("./db/DB_connection");
const Subscriber = require("./models/subscribers");
const User_message = require("./models/user_message");
const hbs = require("hbs");
const path = require("path");
const sendMail = require("./modules/send_mail");
const async = require("hbs/lib/async");
const { getMaxListeners } = require("process");

const port = process.env.PORT || 8000;

app.use(urlencoded({extended: false}));

// Setting static path
app.use(express.static(path.join(__dirname, "../public")));

// Setting view engine
app.set("view engine", "hbs");

// Setting views directory path
app.set("views", path.join(__dirname, "../templates/views"));

// Registering partials.
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

require("./routers/routes")(app, Subscriber, User_message, sendMail);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});