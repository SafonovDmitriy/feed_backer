const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const region = require("../src/api/region/route");
const city = require("../src/api/city/route");
const feedback = require("../src/api/feedback/route");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ...
app.use("/api/v1/region", region);
app.use("/api/v1/city", city);
app.use("/api/v1/feedback", feedback);
// ..
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
