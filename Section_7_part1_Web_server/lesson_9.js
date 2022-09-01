const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const publicDirectoryPath = path.join("public/views");

app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
const viewsPath = path.join("public", "views");
app.set("views", viewsPath);

const partialsPath = path.join("public", "partials");
hbs.registerPartials(partialsPath);

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

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Banu Eror",
        errorMessage: "Page not found.",
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});