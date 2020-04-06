const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const tableau = require("./functions/tableauRequest");

// you want to configure CORS to only go to your prod and dev domains
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test route for entry
app.get("/", function (req, res) {
  res.json({ test: "This is working" });
});

app.post("/tableau/ticket", function (req, res) {
  const serverUrl = req.body.server;
  const site = req.body.site || null;
  const username = req.body.username;
  const ip = req.body.ip || null;
  tableau.getTicket(serverUrl, site, username, ip, function (obj) {
    if (obj.result == "success") {
      res.send({
        result: "Success",
        ticket: obj.ticket,
      });
    } else {
      res.send({
        result: "Error",
        error: obj.error,
        body: obj.output,
      });
    }
  });
});

module.exports.handler = serverless(app);
