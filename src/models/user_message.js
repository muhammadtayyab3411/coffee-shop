const mongoose = require("mongoose");
const validator = require("validator");

const user_msg_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    company:{
        type: String
    },
    phone_number:{
        type: Number,
        minlength: 5
    },
    subject: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const User_message = new mongoose.model("User_message", user_msg_schema);

module.exports = User_message;