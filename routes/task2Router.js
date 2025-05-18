const express = require("express");
const route = express.Router();
const controller = require("../controllers/task2Controller");

route.get("/", controller.show);
route.post("/", controller.showSalary);

module.exports = route;
