const express = require("express")

const app = express();

//view engine middleware
app.set("view engine","ejs")
//middleware
app.use(express.json())
app.use(express.urlencoded({
    extended:true,
}))
//Home routes
app.get('/',(req,res)=>{
    res.send("Hello Express")
})
//myget routes
app.get("/myget",(req,res)=>{
    console.log("Hii I am called")
    console.log(req.query)
    res.send(req.query)
})
//Mypost route
app.post("/mypost",(req,res)=>{
    console.log(req.body)
    console.log(req.files)
})
//Rendering the page
app.get("/getform",(req,res)=>{
    res.render("getform")
})
//Rendering page for post
app.get("/postform",(req,res)=>{
    res.render("postform")
})
app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})