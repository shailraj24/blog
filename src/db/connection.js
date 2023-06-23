const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://tejas498:Tejas%40123@cluster0.5q70sbw.mongodb.net/Blogs").then(() => {
    console.log("MongoDB connection Successful")
}).catch((err) => {
    console.log(`MongoDB connection refused with ${err}`)
})