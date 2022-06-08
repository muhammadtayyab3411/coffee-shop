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

// Routing
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/coffee-at-the-office", (req, res) => {
    res.render("coffee_at_the_office");
});

app.get("/coffee-in-vending", (req, res) => {
    res.render("coffee_in_vending");
});

app.get("/coffee-in-cafe", (req, res) => {
    res.render("coffee_in_cafe");
});

app.get("/our-coffee", (req, res) => {
    res.render("our_coffee");
});

app.get("/coffee-machines", (req, res) => {
    res.render("coffee_machines");
});

app.get("/services", (req, res) => {
    res.render("services");
});

app.get("/coffee-and-us", (req, res) => {
    res.render("coffee_and_us");
});

app.get("/contact-us", (req, res) => {
    res.render("contact_us");
});

app.get("/customer-support", (req, res) => {
    res.render("customer_support");
});

app.get("/faq", (req, res) => {
    res.render("faq");
});

app.get("/privacy-policy", (req, res) => {
    res.render("privacy_policy");
});

app.get("/cookie-policy", (req, res) => {
    res.render("cookie_policy");
});

// POST Routing
app.post("/subscribe", async(req, res) => {
    try{
        const email = req.body.email;
        const subject = `Coffee Shop Subscription`;
        const text = `Thanks for subscribing to Coffee Shop.`
        const emailPresence = await Subscriber.find({email: email});

        if(emailPresence.toString() == ""){
            const newSubscriber = new Subscriber({
                email: email
            });
            await newSubscriber.save();
            
            // sendMail(email, subject, text).then(result => console.log("Mail sent...")).catch(err => console.log(err));
        }
        res.render("home");
    }
    catch(err){
        console.log(err);
    }
});

app.post("/contact-us", async(req, res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const company = req.body.company;
        const phone_number = req.body.phone_number;
        const subject = req.body.subject;
        const message = req.body.message;

        const emailSubject = `Message Recieved (${subject})`;
        const text = `Thank you ${name} for contacting us. Your message has been recieved and our staff will respond to you as soon as possible`;

        const newUserMessage = new User_message({
            name: name,
            email: email,
            company: company,
            phone_number: phone_number,
            subject: subject,
            message: message
        });

        await newUserMessage.save();

        // sendMail(email, emailSubject, text).then(result => console.log("Mail sent...")).catch(err => console.log(err));

        res.render("contact_us");
    }
    catch(err){
        console.log(err);
    }
});

app.get("*", (req, res) => {
    res.status(404).render("404_err_page");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});