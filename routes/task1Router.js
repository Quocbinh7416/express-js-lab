const express = require("express");
const route = express.Router();
const controller = require("../controllers/task1Controller");

route.get("/", controller.show);

module.exports = route;
