const {req,res} = require('express')
const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = 3500


// let userSchema = {
//         firstname: { type: String, required: true },
//         lastname: { type: String, required: true },
//         email: { type: String, required: true, unique: true },
//         password:{ type: String, required: true},
// }

app.set("view engine", "ejs");


app.get("/", (req,res) => {
    console.log("Request made");
    res.render("land")
})

app.get("/signup", (req, res) => {
    console.log("Sign_up accessed")
    res.render("signup", {message:""})
})
app.get("/login", (req, res) => {
    console.log("Log_in accessed")
    res.render("login", {message:""})
})
app.get("/dash", (req, res) => {
    console.log("Dashboard accessed")
    res.render("dash", {message:""})
})

app.post("/login", (req, res) => {
    res.render("login")
})
app.post("/dash", (req, res) => {
    res.render("dash")
})


app.listen(PORT, () => {
    console.log("Server don start on port 3500");
})
