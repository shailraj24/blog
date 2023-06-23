const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Blogs").then(() => {
    console.log("MongoDB connection Successful")
}).catch((err) => {
    console.log(`MongoDB connection refused with ${err}`)
})