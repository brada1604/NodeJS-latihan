// Lesson 5: Serving up CSS, JS, Images, and More
const path = require("path");
const express = require("express");
const app = express();
const publicDirectoryPath = path.join("public/views");

app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
    res.render("index", {
        title: "My title",
        name: "Banu",
    });
});

app.get("/weather", (req, res) => {
    res.send({
        forecast: "It is snowing",
        location: "Philadelphia",
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});