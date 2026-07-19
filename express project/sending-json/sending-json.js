const express = require('express');
 
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Go to /user page to see the json format")
})

app.get("/user", (req, res) => {

    const user = {
        id: 1,
        name: "Jawad",
        age: 22,
    }

    res.json(user)
})

app.listen(3000)