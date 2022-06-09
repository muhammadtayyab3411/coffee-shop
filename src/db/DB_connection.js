require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://muhammadtayyab3411:Tayyab3411.@cluster0.koaqv.mongodb.net/coffee-shop-db?retryWrites=true", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

console.log(process.env.DB_URL);