const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image : {
        default : "https://www.istockphoto.com/photo/luxury-tropical-pool-villa-at-dusk-gm2110310187-566928395?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsea-side-house&utm_term=sea+side+house%3A%3Asearch-affiliate%3Acontrol%3A4f42149b-20f8-4743-a749-c619339a2bc6",
        type : String ,
        set : (v) => v==="" ? "https://www.istockphoto.com/photo/luxury-tropical-pool-villa-at-dusk-gm2110310187-566928395?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsea-side-house&utm_term=sea+side+house%3A%3Asearch-affiliate%3Acontrol%3A4f42149b-20f8-4743-a749-c619339a2bc6" : v 
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String
    }
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
