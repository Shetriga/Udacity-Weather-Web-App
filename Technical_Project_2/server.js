const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.static("Website"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// SERVER FEEDBACK TO THE USER THROUGH THE COMMANDLINE
app.listen(port, () => {
    console.log("Server up and running!");
})

app.get("/", function(req, res) {
    res.send(__dirname + "/index.html");
})