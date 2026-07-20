const express = require("express");
// Create a single Express application instance.
// All middleware and routes are attached to this object.
const app = express();

// Tell Express to use EJS as the template engine.
// This allows us to render .ejs files from the "views" folder.
app.set("view engine", "ejs")

// Global Middleware
// ---------------------
// Runs for every incoming request before it reaches the route.
// Useful for logging, authentication, validation, etc.
app.use((req, res, next) => {
  console.log("Middleware is working");
  next();
});

// Routes

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

// Static profile page
// Renders views/profile.ejs
app.get("/profile", (req, res) => {
    res.render("profile")
})

// ---------------------
// Route Parameters
// ---------------------
// ":username" is a dynamic route parameter.
//
// Example:
// GET /profile/jawad
// req.params.username -> "jawad"
//
// This lets one route handle many different URLs.
app.get("/profile/:username", (req, res) => {
    res.send(`This is ${req.params.username} profile`)
})

// Start the server on port 3000
app.listen(3000)