const express = require("express");
const route = express.Router();
const controller = require("../controllers/task4Controller");

// / task4
route.get("/", controller.show);

// /task4/name
route.get("/:name", controller.showDetail);

module.exports = route;
