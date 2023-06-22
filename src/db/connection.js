const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Blogs").then(() => {
    console.log("MongoDB connection Successful")
}).catch((err) => {
    console.log(`MongoDB connection refused with ${err}`)
})