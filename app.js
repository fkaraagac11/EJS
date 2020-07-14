const express = require("express");
const app = express();

// '/' => 'Hi there
app.get("/", (req, res) => {
    console.log(res.send("Hi There!"));
});

app.listen(3000, () => {
    console.log("server has started");
});
// '/bye' => 'Goodbye'

app.get("/bye", (req, res) => {
    res.send("post request started");
});
// '/dog' =>'meaw'

app.get("/dog", function (req, res) {
    res.send("meaw");
});

// const faker = require("faker");

// console.log(faker.name.findName());
// console.log(faker.internet.email());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.price());
