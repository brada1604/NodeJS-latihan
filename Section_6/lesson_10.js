const weather = require("./utils/weather");

weather("Ciamis", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});