const controller = {};
const { categories, products } = require("../models/data");

controller.showList = (req, res) => {
    let category = req.query.category ? req.query.category : 0;
    res.locals.categories = categories;
    res.locals.products = category == 0 ? products : products.filter((p) => p.category == category);
    res.render("task3");
};

module.exports = controller;