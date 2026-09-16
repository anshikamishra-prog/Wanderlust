const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

main()
.then( res => console.log("connected to db"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get("/" , (req , res) => {
    res.send("HELLO ROOT");
});

app.get("/testListing" , async (req , res) => {
    let sampleListing = new Listing ({
        title : "Esta re' Vica",
        description : "At the beach side",
        price : 3000,
        location : "Calungute , Goa" ,
        country : "India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful!");
});

app.listen(8080 , () => {
    console.log("server is listening to port 8080");
})