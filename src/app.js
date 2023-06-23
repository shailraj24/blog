const express = require('express');
require("./db/connection")
const cors = require('cors');

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
const Blog = require("./models/Blog")

const app = express()
const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

// for adding blogs
const addBlog = async(req,res) => {
    try{
        const bg = new Blog(req.body);
        const newBg = await bg.save()
        res.status(201).send(newBg)
    }
    catch(err){
        res.status(400).send(err)
    }
}

// for listing blogs
const listBlog = async(req,res) => {
    try{
        const blogDetails = await Blog.find()
        res.status(200).send(blogDetails)
    }catch(err){
        res.status(400).send(err)
    }
}

// for getting single blog
const singleBlog = async(req,res) => {
    try{
        const _id = req.params.id
        const blog = await Blog.findById(_id)
        res.status(200).send(blog)
    }
    catch(err){
        res.status(400).send(err)
    }
}

// for editing blog
const editBlog = async(req,res) => {
    try{
        const _id = req.params.id
        const body = req.body
        const blog = await Blog.findByIdAndUpdate(_id,body , {new:true})
        res.status(200).send(blog)
    }
    catch(err){
        res.status(400).send(err)
    }
}

// for Deleting blog 
const delBlog = async(req,res) => {
    try{
        const _id = req.params.id
        const delblog = await Blog.findByIdAndDelete(_id)
        if(!delBlog){
            throw "This Blog does not exist."
        }
        res.status(200).send(delblog)
    }
    catch(err){
        res.status(400).send(err)
    }
}

app.post('/blog/add', addBlog); //add
app.get('/blog', listBlog); //list
app.get('/blog/:id', singleBlog); // single blog
app.patch('/blog/:id', editBlog); // edit blog
app.delete('/blog/:id', delBlog); // for deleting Blog

app.listen(port , () => {
    console.log(`app is listening at ${port}`)
})