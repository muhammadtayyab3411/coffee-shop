require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.koaqv.mongodb.net/coffee-shop-db?retryWrites=true`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

console.log(process.env.DB_URL);