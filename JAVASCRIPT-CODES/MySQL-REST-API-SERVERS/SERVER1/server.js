var fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.header("Content-Type",'application/json'); 
  res.send(JSON.stringify({ message: "Welcome to bezkoder MySQL JSON application." }, null, 4));
});


//HTTPS
const privateKey  = fs.readFileSync('./ssl/json.mysqhost.tk-le.key', 'utf8');
const certificate = fs.readFileSync('./ssl/json.mysqhost.tk-le.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests

let httpsServer = https.createServer(credentials, app);

httpsServer.listen(3003);
console.log("SERVER IS RUNNING NOW! https://json.mysqhost.tk:3003")