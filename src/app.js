const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port =process.env.PORT || 5000;

// console.log(path.join(__dirname,"../public"));

const static_path = path.join(__dirname,"../public");
// static path serve html/ public folder
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));




// it is routing 
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error");
})

app.listen(port,()=>{
    console.log(`listing on port ${port}`);
})