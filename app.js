const express = require("express");
const app = express();

// '/' => 'Hi there
app.get("/", (req, res) => {
    console.log(res.send("Hi There!"));
});

app.listen(3000, () => {
    console.log("server-I has started");
});
// '/bye' => 'Goodbye'

app.get("/bye", (req, res) => {
    res.send("post request started");
});
// '/dog' =>'meaw'

app.get("/dog", function (req, res) {
    res.send("meaw");
});

app.get("/r/:subredditName", function (req, res) {
    var subreddit = req.params.subredditName;
    console.log(subreddit);
    res.send("WELCOME TO " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", (req, res) => {
    console.log(req.params);
    res.send("WELCOME TO COMMENTS PAGES");
});

app.get("*", function (req, res) {
    res.send("YOU ARE A STAR");
});
// const faker = require("faker");

// console.log(faker.name.findName());
// console.log(faker.internet.email());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.price());
