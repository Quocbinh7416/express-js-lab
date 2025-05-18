const express = require("express");
const route = express.Router();
const controller = require("../controllers/task3Controller");

route.get("/", controller.showList);

module.exports = route;
