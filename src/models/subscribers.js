const mongoose = require("mongoose");
const validator = require("validator");

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    }
});

const Subscriber = new mongoose.model("Subscriber", subscriberSchema);

module.exports = Subscriber;