const controller = {};
const { zodiacs } = require("../models/data");


controller.show = (req, res) => {

    res.locals.zodiacs = zodiacs;
    res.render("task4");
};


controller.showDetail = (req, res) => {
    const { name } = req.params;
    const zodiac = zodiacs.find((zodiac) => zodiac.name = name);
    
    if (zodiac) {
        res.render("task4-details", { zodiac });
    } else {
        
        res.render("task4-details", { zodiac : zodiacs[0] });
    }
};

module.exports = controller;